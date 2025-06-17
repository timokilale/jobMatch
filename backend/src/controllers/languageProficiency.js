const prisma = require('../prisma');

exports.createLanguage = async (req, res) => {
  const { applicantId, language, speakLevel, readLevel, writeLevel } = req.body;

  if (!applicantId || isNaN(parseInt(applicantId))) {
    return res.status(400).json({ error: 'Invalid applicant ID' });
  }

  try {
    const lang = await prisma.languageProficiency.create({
      data: {
        applicantId: parseInt(applicantId),
        language,
        speakLevel,
        readLevel,
        writeLevel
      }
    });
    res.status(201).json(lang);
  } catch (error) {
    console.error('Error creating language:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getLanguages = async (req, res) => {
  const applicantId = parseInt(req.params.applicantId);

  if (!applicantId || isNaN(applicantId)) {
    return res.status(400).json({ error: 'Invalid applicantId'});
  }

  try {
    const langs = await prisma.languageProficiency.findMany({ 
      where: { applicantId } 
    });
    res.json(langs);
  } catch (error) {
    console.error('Get languages error:', error);
    res.status(500).json({ error: 'Failed to fetch language proficiencies' });
  }
};

exports.updateLanguage = async (req, res) => {
  const { id } = req.params;
  const { language, speakLevel, readLevel, writeLevel } = req.body;

  try {
    const updated = await prisma.languageProficiency.update({
      where: { id: parseInt(id) },
      data: { language, speakLevel, readLevel, writeLevel },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update language proficiency' });
  }
};

exports.deleteLanguage = async (req, res) => {
  try {
    await prisma.languageProficiency.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete language proficiency' });
  }
};
