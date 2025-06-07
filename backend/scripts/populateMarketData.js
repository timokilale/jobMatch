const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function populateMarketData() {
  console.log('⚠️  This script has been disabled to prevent sample data creation.');
  console.log('📊 Market Insights now uses only real job posting data.');
  console.log('💡 To see market insights, ensure you have active jobs with skill requirements in the database.');

  try {
    // Check current real data
    const activeJobs = await prisma.job.count({ where: { status: 'ACTIVE' } });
    const jobsWithRequirements = await prisma.job.count({
      where: {
        status: 'ACTIVE',
        requirements: {
          some: {}
        }
      }
    });

    console.log(`\n📈 Current Real Data:`);
    console.log(`   Active Jobs: ${activeJobs}`);
    console.log(`   Jobs with Skill Requirements: ${jobsWithRequirements}`);

    if (jobsWithRequirements === 0) {
      console.log('\n💡 To see market insights:');
      console.log('   1. Create jobs with skill requirements');
      console.log('   2. Ensure jobs have status "ACTIVE"');
      console.log('   3. Market insights will automatically calculate from real data');
    }

  } catch (error) {
    console.error('❌ Error checking market data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
populateMarketData();
