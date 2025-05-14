const prisma = require('../prisma');

// Get all job categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.jobCategory.findMany();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch job categories' });
  }
};
