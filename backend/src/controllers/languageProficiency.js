const prisma = require('../prisma');

exports.createLanguage = async (req, res) => {
  const { applicantId, language, speak, read, write } = req.body;

  try {
    const lang = await prisma.languageProficiency.create({
      data: { applicantId: parseInt(applicantId), language, speak, read, write }
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

exports.updateLanguage = async (req, res) => {
  const { id } = req.params;
  const { language, speak, read, write } = req.body;

  try {
    const updated = await prisma.languageProficiency.update({
      where: { id: parseInt(id) },
      data: { language, speak, read, write },
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
