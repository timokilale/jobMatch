const { PrismaClient } = require('./generated/prisma-client-js');
const prisma = new PrismaClient();



const categories = [
  {
    name: 'Information Technology',
    description: 'Software development, IT support, network administration, etc.'
  },
  {
    name: 'Healthcare',
    description: 'Medical, nursing, pharmacy, and other healthcare positions'
  },
  {
    name: 'Education',
    description: 'Teaching, administration, and support roles in educational institutions'
  },
  {
    name: 'Finance',
    description: 'Banking, accounting, financial analysis, and investment roles'
  },
  {
    name: 'Hospitality',
    description: 'Hotels, restaurants, tourism, and customer service'
  },
  {
    name: 'Manufacturing',
    description: 'Production, quality control, and assembly line positions'
  },
  {
    name: 'Marketing',
    description: 'Digital marketing, branding, social media, and advertising'
  },
  {
    name: 'Sales',
    description: 'B2B sales, retail, account management, and business development'
  },
  {
    name: 'Engineering',
    description: 'Civil, mechanical, electrical, and other engineering disciplines'
  },
  {
    name: 'Transportation',
    description: 'Driving, logistics, shipping, and fleet management'
  },
  {
    name: 'Construction',
    description: 'Building, architecture, and skilled trades'
  },
  {
    name: 'Legal',
    description: 'Attorneys, paralegals, and legal support roles'
  }
];

const seedCategories = async () => {
  console.log('Seeding job categories...');
  try {
    for (const category of categories) {
      const existing = await prisma.jobCategory.findFirst({
        where: { name: category.name }
      });
      
      if (!existing) {
        await prisma.jobCategory.create({
          data: category
        });
        console.log(`Created category: ${category.name}`);
      } else {
        console.log(`Category already exists: ${category.name}`);
      }
    }
    console.log('Job categories seeding completed successfully');
  } catch (error) {
    console.error('Error seeding job categories:', error);
  } finally {
    await prisma.$disconnect();
  }
};

// Run the seeder if this file is executed directly
if (require.main === module) {
  seedCategories();
}

module.exports = { seedCategories };