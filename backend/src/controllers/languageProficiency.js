const prisma = require('../prisma');

exports.createLanguage = async (req, res) => {
  const { applicantId, language, proficiency } = req.body;

  try {
    const lang = await prisma.languageProficiency.create({
      data: { applicantId: parseInt(applicantId), language, proficiency }
    });
    res.status(201).json(lang);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add language proficiency' });
  }
};

exports.getLanguages = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);
    const langs = await prisma.languageProficiency.findMany({ where: { applicantId } });
    res.json(langs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch language proficiencies' });
  }
};
