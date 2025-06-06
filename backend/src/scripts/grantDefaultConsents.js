const prisma = require('../prisma');
const PrivacyManager = require('../services/privacyManager');

const privacyManager = new PrivacyManager();

/**
 * Grant default consents for existing users who don't have consent records
 */
async function grantDefaultConsents() {
  console.log('🔐 Starting default consent migration...');
  
  try {
    // Get all users
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    console.log(`Found ${users.length} users to process`);

    let processedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const user of users) {
      try {
        // Check if user already has consent records
        const existingConsents = await prisma.userConsent.findMany({
          where: { userId: user.id }
        });

        if (existingConsents.length > 0) {
          console.log(`⏭️  Skipping user ${user.email} - already has consent records`);
          skippedCount++;
          continue;
        }

        // Grant default consents
        const defaultConsents = [
          {
            type: 'analytics',
            purpose: 'Default consent granted for existing user - analytics features'
          },
          {
            type: 'job_matching',
            purpose: 'Default consent granted for existing user - job matching features'
          },
          {
            type: 'profile_data',
            purpose: 'Default consent granted for existing user - profile data processing'
          }
        ];

        for (const consent of defaultConsents) {
          await privacyManager.recordConsent(
            user.id,
            consent.type,
            true,
            consent.purpose
          );
        }

        console.log(`✅ Granted default consents for user: ${user.email}`);
        processedCount++;

      } catch (userError) {
        console.error(`❌ Error processing user ${user.email}:`, userError);
        errorCount++;
      }
    }

    console.log('\n📊 Migration Summary:');
    console.log(`✅ Processed: ${processedCount} users`);
    console.log(`⏭️  Skipped: ${skippedCount} users (already had consents)`);
    console.log(`❌ Errors: ${errorCount} users`);
    console.log('🎉 Default consent migration completed!');

  } catch (error) {
    console.error('💥 Migration failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Check consent status for all users
 */
async function checkConsentStatus() {
  console.log('🔍 Checking consent status for all users...');
  
  try {
    const users = await prisma.user.findMany({
      include: {
        consents: true
      }
    });

    console.log('\n📋 Consent Status Report:');
    console.log('=' .repeat(50));

    for (const user of users) {
      console.log(`\n👤 User: ${user.email} (${user.role})`);
      
      if (user.consents.length === 0) {
        console.log('   ❌ No consent records found');
      } else {
        user.consents.forEach(consent => {
          const status = consent.granted ? '✅ Granted' : '❌ Denied';
          const date = consent.grantedAt ? consent.grantedAt.toISOString().split('T')[0] : 'N/A';
          console.log(`   ${status} ${consent.consentType} (${date})`);
        });
      }
    }

  } catch (error) {
    console.error('Error checking consent status:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
if (require.main === module) {
  const command = process.argv[2];
  
  if (command === 'check') {
    checkConsentStatus()
      .then(() => process.exit(0))
      .catch(() => process.exit(1));
  } else {
    grantDefaultConsents()
      .then(() => process.exit(0))
      .catch(() => process.exit(1));
  }
}

module.exports = {
  grantDefaultConsents,
  checkConsentStatus
};
