const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const PDFDocument = require('pdfkit');

exports.generatePdf = async (req, res) => {
  const id = parseInt(req.params.id);
  const applicant = await prisma.applicant.findUnique({
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

  if (!applicant) return res.status(404).send('Applicant not found');

  const doc = new PDFDocument();
  res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  doc.pipe(res);

  doc.fontSize(18).text(applicant.fullName, { underline: true });
  doc.fontSize(12).text(`Email: ${applicant.user.email}`);
  doc.text(`NIDA: ${applicant.nida}\n`);

  doc.fontSize(14).text('Qualifications:', { underline: true });
  applicant.qualifications.forEach(q => {
    doc.text(`${q.level} in ${q.fieldOfStudy} - ${q.institution}`);
  });

  doc.moveDown().fontSize(14).text('Work Experience:', { underline: true });
  applicant.experiences.forEach(e => {
    doc.text(`${e.jobTitle} at ${e.institution}`);
    if (e.duties) doc.text(`  Duties: ${e.duties}`);
  });

  doc.moveDown().fontSize(14).text('Languages:', { underline: true });
  applicant.languages.forEach(l => {
    doc.text(`${l.language}: Speak - ${l.speak}, Read - ${l.read}, Write - ${l.write}`);
  });

  doc.moveDown().fontSize(14).text('Computer Skills:', { underline: true });
  applicant.skills.forEach(s => {
    doc.text(`${s.skill} - ${s.proficiency}`);
  });

  doc.moveDown().fontSize(14).text('Preferred Categories:', { underline: true });
  applicant.categories.forEach(c => doc.text(c.name));

  doc.end();
};
