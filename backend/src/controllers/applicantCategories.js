const prisma = require('../prisma');

// Get applicant's selected categories
exports.getApplicantCategories = async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id },
      include: {
        categories: {
          orderBy: { name: 'asc' }
        }
      }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    res.json({
      selectedCategories: applicant.categories,
      applicantId: applicant.id
    });
  } catch (error) {
    console.error('Error fetching applicant categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Get all available categories with selection status
exports.getAllCategoriesWithStatus = async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id },
      include: {
        categories: {
          select: { id: true }
        }
      }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    const selectedCategoryIds = applicant.categories.map(cat => cat.id);

    const allCategories = await prisma.jobCategory.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: {
            jobs: {
              where: { status: 'ACTIVE' }
            }
          }
        }
      }
    });

    const categoriesWithStatus = allCategories.map(category => ({
      ...category,
      isSelected: selectedCategoryIds.includes(category.id),
      activeJobsCount: category._count.jobs
    }));

    res.json({
      categories: categoriesWithStatus,
      selectedCount: selectedCategoryIds.length
    });
  } catch (error) {
    console.error('Error fetching categories with status:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Update applicant's selected categories
exports.updateApplicantCategories = async (req, res) => {
  try {
    const { categoryIds } = req.body;

    if (!Array.isArray(categoryIds)) {
      return res.status(400).json({ error: 'categoryIds must be an array' });
    }

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Validate that all category IDs exist and are active
    const validCategories = await prisma.jobCategory.findMany({
      where: {
        id: { in: categoryIds },
        isActive: true
      }
    });

    if (validCategories.length !== categoryIds.length) {
      return res.status(400).json({ error: 'Some category IDs are invalid or inactive' });
    }

    // Update applicant categories (disconnect all, then connect selected)
    const updatedApplicant = await prisma.applicant.update({
      where: { id: applicant.id },
      data: {
        categories: {
          set: categoryIds.map(id => ({ id }))
        }
      },
      include: {
        categories: {
          orderBy: { name: 'asc' }
        }
      }
    });

    console.log(`✅ Updated categories for applicant ${applicant.id}: ${categoryIds.length} categories selected`);

    res.json({
      success: true,
      message: 'Categories updated successfully',
      selectedCategories: updatedApplicant.categories,
      selectedCount: updatedApplicant.categories.length
    });
  } catch (error) {
    console.error('Error updating applicant categories:', error);
    res.status(500).json({ error: 'Failed to update categories' });
  }
};

// Add a single category to applicant's selection
exports.addCategory = async (req, res) => {
  try {
    const { categoryId } = req.body;

    if (!categoryId) {
      return res.status(400).json({ error: 'categoryId is required' });
    }

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id },
      include: {
        categories: { select: { id: true } }
      }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Check if category is already selected
    const isAlreadySelected = applicant.categories.some(cat => cat.id === parseInt(categoryId));
    if (isAlreadySelected) {
      return res.status(400).json({ error: 'Category already selected' });
    }

    // Validate category exists and is active
    const category = await prisma.jobCategory.findFirst({
      where: {
        id: parseInt(categoryId),
        isActive: true
      }
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found or inactive' });
    }

    // Add category to applicant
    await prisma.applicant.update({
      where: { id: applicant.id },
      data: {
        categories: {
          connect: { id: parseInt(categoryId) }
        }
      }
    });

    console.log(`✅ Added category ${category.name} to applicant ${applicant.id}`);

    res.json({
      success: true,
      message: `Added ${category.name} to your job categories`,
      addedCategory: category
    });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ error: 'Failed to add category' });
  }
};

// Remove a single category from applicant's selection
exports.removeCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id },
      include: {
        categories: true
      }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Check if category is selected
    const selectedCategory = applicant.categories.find(cat => cat.id === parseInt(categoryId));
    if (!selectedCategory) {
      return res.status(404).json({ error: 'Category not found in your selection' });
    }

    // Remove category from applicant
    await prisma.applicant.update({
      where: { id: applicant.id },
      data: {
        categories: {
          disconnect: { id: parseInt(categoryId) }
        }
      }
    });

    console.log(`✅ Removed category ${selectedCategory.name} from applicant ${applicant.id}`);

    res.json({
      success: true,
      message: `Removed ${selectedCategory.name} from your job categories`,
      removedCategory: selectedCategory
    });
  } catch (error) {
    console.error('Error removing category:', error);
    res.status(500).json({ error: 'Failed to remove category' });
  }
};
