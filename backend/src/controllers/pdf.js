const prisma = require('../prisma');
const PDFDocument = require('pdfkit');

exports.generatePdf = async (req, res) => {
  try {
    console.log('PDF generation requested for ID:', req.params.id);
    
    const id = parseInt(req.params.id);
    
    // Validate ID
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid applicant ID' });
    }

    // Try to find applicant by applicant ID first, then by userId
    let applicant = await prisma.applicant.findUnique({
      where: { id: id },
      include: {
        user: true,
        qualifications: true,
        experiences: true,
        languages: true,
        skills: true,
        categories: true,
      },
    });

    // If not found by applicant ID, try by userId
    if (!applicant) {
      console.log('Applicant not found by ID, trying userId...');
      applicant = await prisma.applicant.findUnique({
        where: { userId: id },
        include: {
          user: true,
          qualifications: true,
          experiences: true,
          languages: true,
          skills: true,
          categories: true,
        },
      });
    }

    console.log('Applicant found:', !!applicant);

    if (!applicant) {
      console.log('Applicant not found with ID:', id);
      return res.status(404).json({ error: 'Applicant not found' });
    }

    console.log('Applicant data:', {
      id: applicant.id,
      userId: applicant.userId,
      fullName: applicant.fullName,
      email: applicant.user?.email
    });

    // Set headers for PDF download
    res.setHeader('Content-Disposition', `attachment; filename=CV_${applicant.fullName?.replace(/\s+/g, '_') || 'applicant'}.pdf`);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    const doc = new PDFDocument();
    doc.pipe(res);

    // Header
    doc.fontSize(18).text(applicant.fullName || 'N/A', { underline: true });
    doc.fontSize(12).text(`Email: ${applicant.user?.email || 'N/A'}`);
    doc.text(`NIDA: ${applicant.nida || 'N/A'}\n`);

    // Qualifications
    doc.fontSize(14).text('Academic Qualifications:', { underline: true });
    if (applicant.qualifications && applicant.qualifications.length > 0) {
      applicant.qualifications.forEach(q => {
        doc.text(`${q.level || 'N/A'} in ${q.fieldOfStudy || 'N/A'} - ${q.institution || 'N/A'}`);
      });
    } else {
      doc.text('No qualifications found');
    }

    // Work Experience
    doc.moveDown().fontSize(14).text('Work Experience:', { underline: true });
    if (applicant.experiences && applicant.experiences.length > 0) {
      applicant.experiences.forEach(e => {
        doc.text(`${e.jobTitle || 'N/A'} at ${e.institution || 'N/A'}`);
        if (e.duties) doc.text(`  Duties: ${e.duties}`);
      });
    } else {
      doc.text('No work experience found');
    }

    // Languages
    doc.moveDown().fontSize(14).text('Languages:', { underline: true });
    if (applicant.languages && applicant.languages.length > 0) {
      applicant.languages.forEach(l => {
        doc.text(`${l.language || 'N/A'}: Speak - ${l.speak || 'N/A'}, Read - ${l.read || 'N/A'}, Write - ${l.write || 'N/A'}`);
      });
    } else {
      doc.text('No languages found');
    }

    // Computer Skills
    doc.moveDown().fontSize(14).text('Computer Skills:', { underline: true });
    if (applicant.skills && applicant.skills.length > 0) {
      applicant.skills.forEach(s => {
        doc.text(`${s.skill || 'N/A'} - ${s.proficiency || 'N/A'}`);
      });
    } else {
      doc.text('No computer skills found');
    }

    // Preferred Categories
    doc.moveDown().fontSize(14).text('Preferred Categories:', { underline: true });
    if (applicant.categories && applicant.categories.length > 0) {
      applicant.categories.forEach(c => doc.text(c.name || 'N/A'));
    } else {
      doc.text('No categories found');
    }

    doc.end();
    console.log('PDF generation completed successfully');

  } catch (error) {
    console.error('PDF generation error:', error);
    
    // Make sure headers haven't been sent yet
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'Failed to generate PDF',
        details: error.message 
      });
    }
  }
};