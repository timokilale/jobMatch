const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function populateMarketData() {
  console.log('🚀 Populating sample market trend data...');

  try {
    // Sample industries/categories
    const industries = [
      'Technology',
      'Healthcare',
      'Education',
      'Finance',
      'Manufacturing',
      'Retail',
      'Construction',
      'Agriculture'
    ];

    // Generate sample data for the last 6 months
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      months.push(date);
    }

    console.log('📊 Creating market trend data...');

    for (const industry of industries) {
      for (const month of months) {
        // Job postings trend
        await prisma.marketTrend.create({
          data: {
            industry,
            metric: 'job_postings',
            value: Math.floor(Math.random() * 500) + 100, // 100-600 jobs
            period: 'monthly',
            date: month,
            source: 'sample_data'
          }
        });

        // Average salary trend
        await prisma.marketTrend.create({
          data: {
            industry,
            metric: 'salary_avg',
            value: Math.floor(Math.random() * 50000) + 30000, // 30k-80k salary
            period: 'monthly',
            date: month,
            source: 'sample_data'
          }
        });

        // Demand score trend
        await prisma.marketTrend.create({
          data: {
            industry,
            metric: 'demand_score',
            value: Math.random() * 100, // 0-100 demand score
            period: 'monthly',
            date: month,
            source: 'sample_data'
          }
        });
      }
    }

    console.log('✅ Sample market trend data created successfully!');

    // Also create some sample skill demand data
    console.log('🔧 Creating skill demand data...');

    const skills = [
      { name: 'JavaScript', category: 'Technical' },
      { name: 'Python', category: 'Technical' },
      { name: 'React', category: 'Technical' },
      { name: 'Node.js', category: 'Technical' },
      { name: 'Data Analysis', category: 'Technical' },
      { name: 'Project Management', category: 'Soft' },
      { name: 'Communication', category: 'Soft' },
      { name: 'Leadership', category: 'Soft' },
      { name: 'English', category: 'Language' },
      { name: 'Swahili', category: 'Language' }
    ];

    for (const skill of skills) {
      // Check if skill exists, create if not
      let skillMaster = await prisma.skillMaster.findFirst({
        where: { name: skill.name }
      });

      if (!skillMaster) {
        skillMaster = await prisma.skillMaster.create({
          data: {
            name: skill.name,
            category: skill.category,
            description: `${skill.name} skill`,
            isActive: true
          }
        });
      }

      // Create skill demand data for each month
      for (const month of months) {
        await prisma.skillDemand.create({
          data: {
            skillMasterId: skillMaster.id,
            demandScore: Math.random() * 100,
            growth: (Math.random() - 0.5) * 50, // -25% to +25% growth
            industry: industries[Math.floor(Math.random() * industries.length)],
            region: 'Tanzania',
            period: month,
            source: 'sample_data'
          }
        });
      }
    }

    console.log('✅ Sample skill demand data created successfully!');
    console.log('📈 Market data population completed!');

  } catch (error) {
    console.error('❌ Error populating market data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
populateMarketData();
