const prisma = require('../src/prisma');

async function cleanSampleData() {
  console.log('🧹 Cleaning all sample/mock data from database...');

  try {
    // Delete all sample data from SkillDemand table
    const deletedSkillDemand = await prisma.skillDemand.deleteMany({
      where: { source: 'sample_data' }
    });
    console.log(`✅ Deleted ${deletedSkillDemand.count} sample skill demand records`);

    // Delete all sample data from MarketTrend table
    const deletedMarketTrends = await prisma.marketTrend.deleteMany({
      where: { source: 'sample_data' }
    });
    console.log(`✅ Deleted ${deletedMarketTrends.count} sample market trend records`);

    // Check remaining data
    const remainingSkillDemand = await prisma.skillDemand.count();
    const remainingMarketTrends = await prisma.marketTrend.count();
    
    console.log(`📊 Remaining skill demand records: ${remainingSkillDemand}`);
    console.log(`📊 Remaining market trend records: ${remainingMarketTrends}`);

    // Verify no sample data remains
    const sampleSkillDemand = await prisma.skillDemand.count({
      where: { source: 'sample_data' }
    });
    const sampleMarketTrends = await prisma.marketTrend.count({
      where: { source: 'sample_data' }
    });

    if (sampleSkillDemand === 0 && sampleMarketTrends === 0) {
      console.log('🎉 All sample data successfully removed!');
    } else {
      console.log('⚠️  Some sample data may still remain');
    }

    // Show what real data we have
    console.log('\n📈 REAL DATA SUMMARY:');
    
    // Count active jobs with requirements
    const activeJobsWithReqs = await prisma.job.findMany({
      where: { status: 'ACTIVE' },
      include: {
        requirements: {
          include: {
            skillMaster: true
          }
        }
      }
    });

    let totalRequirements = 0;
    const skillCounts = {};
    
    activeJobsWithReqs.forEach(job => {
      totalRequirements += job.requirements.length;
      job.requirements.forEach(req => {
        const skillName = req.skillMaster.name;
        skillCounts[skillName] = (skillCounts[skillName] || 0) + 1;
      });
    });

    console.log(`📊 Active jobs: ${activeJobsWithReqs.length}`);
    console.log(`📊 Total skill requirements: ${totalRequirements}`);
    console.log(`📊 Unique skills in demand: ${Object.keys(skillCounts).length}`);

    if (Object.keys(skillCounts).length > 0) {
      console.log('\n🔥 Top 5 skills from real job requirements:');
      const topSkills = Object.entries(skillCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);
      
      topSkills.forEach(([skill, count], index) => {
        console.log(`${index + 1}. ${skill}: ${count} mentions`);
      });
    } else {
      console.log('⚠️  No real job requirements found in database');
    }

  } catch (error) {
    console.error('❌ Error cleaning sample data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
cleanSampleData();
