const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkMarketData() {
  console.log('=== CHECKING CURRENT DATABASE DATA ===');
  
  try {
    // Check jobs with requirements
    const jobsWithReqs = await prisma.job.findMany({
      where: { status: 'ACTIVE' },
      include: {
        requirements: {
          include: {
            skillMaster: true
          }
        }
      }
    });
    
    console.log('\n📊 ACTIVE JOBS WITH REQUIREMENTS:');
    console.log('Total active jobs:', jobsWithReqs.length);
    
    let totalRequirements = 0;
    const skillCounts = {};
    
    jobsWithReqs.forEach(job => {
      totalRequirements += job.requirements.length;
      job.requirements.forEach(req => {
        const skillName = req.skillMaster.name;
        skillCounts[skillName] = (skillCounts[skillName] || 0) + 1;
      });
    });
    
    console.log('Total skill requirements:', totalRequirements);
    console.log('\n🔥 TOP 10 SKILLS FROM ACTUAL JOB REQUIREMENTS:');
    const sortedSkills = Object.entries(skillCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10);
    
    sortedSkills.forEach(([skill, count], index) => {
      console.log(`${index + 1}. ${skill}: ${count} mentions`);
    });
    
    // Check SkillDemand table
    const skillDemandData = await prisma.skillDemand.findMany({
      include: {
        skillMaster: true
      },
      orderBy: { demandScore: 'desc' },
      take: 10
    });
    
    console.log('\n📈 SKILL DEMAND TABLE DATA:');
    console.log('Total skill demand records:', await prisma.skillDemand.count());
    console.log('\nTop 10 from SkillDemand table:');
    skillDemandData.forEach((item, index) => {
      console.log(`${index + 1}. ${item.skillMaster.name}: ${item.demandScore.toFixed(1)} score (source: ${item.source || 'unknown'})`);
    });
    
    // Check if there's sample data
    const sampleDataCount = await prisma.skillDemand.count({
      where: { source: 'sample_data' }
    });
    
    console.log('\n⚠️  SAMPLE DATA RECORDS:', sampleDataCount);
    
    // Check market trends
    const marketTrends = await prisma.marketTrend.findMany({
      take: 5,
      orderBy: { date: 'desc' }
    });
    
    console.log('\n📊 MARKET TRENDS DATA:');
    console.log('Total market trend records:', await prisma.marketTrend.count());
    marketTrends.forEach((trend, index) => {
      console.log(`${index + 1}. ${trend.industry} - ${trend.metric}: ${trend.value} (${trend.source || 'unknown'})`);
    });
    
    const sampleTrendCount = await prisma.marketTrend.count({
      where: { source: 'sample_data' }
    });
    
    console.log('\n⚠️  SAMPLE TREND DATA RECORDS:', sampleTrendCount);
    
  } catch (error) {
    console.error('❌ Error checking market data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
checkMarketData();
