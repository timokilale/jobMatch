const prisma = require('../prisma');

// Get notification settings for applicant
exports.getNotificationSettings = async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id },
      include: {
        notificationSettings: true
      }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // If no settings exist, create default settings
    let settings = applicant.notificationSettings;
    if (!settings) {
      settings = await prisma.notificationSettings.create({
        data: {
          applicantId: applicant.id
        }
      });
    }

    res.json({
      success: true,
      settings: settings
    });
  } catch (error) {
    console.error('Error fetching notification settings:', error);
    res.status(500).json({ error: 'Failed to fetch notification settings' });
  }
};

// Update notification settings
exports.updateNotificationSettings = async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    const {
      emailEnabled,
      emailJobMatches,
      emailApplicationStatus,
      emailInterviews,
      emailMarketing,
      smsEnabled,
      smsApplicationStatus,
      smsInterviews,
      smsUrgent,
      pushEnabled,
      pushJobMatches,
      pushApplicationStatus,
      pushInterviews,
      profileVisible,
      autoApply
    } = req.body;

    // Update or create notification settings
    const settings = await prisma.notificationSettings.upsert({
      where: { applicantId: applicant.id },
      update: {
        emailEnabled: emailEnabled !== undefined ? emailEnabled : undefined,
        emailJobMatches: emailJobMatches !== undefined ? emailJobMatches : undefined,
        emailApplicationStatus: emailApplicationStatus !== undefined ? emailApplicationStatus : undefined,
        emailInterviews: emailInterviews !== undefined ? emailInterviews : undefined,
        emailMarketing: emailMarketing !== undefined ? emailMarketing : undefined,
        smsEnabled: smsEnabled !== undefined ? smsEnabled : undefined,
        smsApplicationStatus: smsApplicationStatus !== undefined ? smsApplicationStatus : undefined,
        smsInterviews: smsInterviews !== undefined ? smsInterviews : undefined,
        smsUrgent: smsUrgent !== undefined ? smsUrgent : undefined,
        pushEnabled: pushEnabled !== undefined ? pushEnabled : undefined,
        pushJobMatches: pushJobMatches !== undefined ? pushJobMatches : undefined,
        pushApplicationStatus: pushApplicationStatus !== undefined ? pushApplicationStatus : undefined,
        pushInterviews: pushInterviews !== undefined ? pushInterviews : undefined,
        profileVisible: profileVisible !== undefined ? profileVisible : undefined,
        autoApply: autoApply !== undefined ? autoApply : undefined,
      },
      create: {
        applicantId: applicant.id,
        emailEnabled: emailEnabled ?? true,
        emailJobMatches: emailJobMatches ?? true,
        emailApplicationStatus: emailApplicationStatus ?? true,
        emailInterviews: emailInterviews ?? true,
        emailMarketing: emailMarketing ?? false,
        smsEnabled: smsEnabled ?? false,
        smsApplicationStatus: smsApplicationStatus ?? false,
        smsInterviews: smsInterviews ?? false,
        smsUrgent: smsUrgent ?? false,
        pushEnabled: pushEnabled ?? true,
        pushJobMatches: pushJobMatches ?? true,
        pushApplicationStatus: pushApplicationStatus ?? true,
        pushInterviews: pushInterviews ?? true,
        profileVisible: profileVisible ?? true,
        autoApply: autoApply ?? false,
      }
    });

    console.log(`✅ Updated notification settings for applicant ${applicant.id}`);

    res.json({
      success: true,
      message: 'Notification settings updated successfully',
      settings: settings
    });
  } catch (error) {
    console.error('Error updating notification settings:', error);
    res.status(500).json({ error: 'Failed to update notification settings' });
  }
};

// Update a single notification setting
exports.updateSingleSetting = async (req, res) => {
  try {
    const { setting, value } = req.body;

    if (!setting || value === undefined) {
      return res.status(400).json({ error: 'Setting name and value are required' });
    }

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Validate setting name
    const validSettings = [
      'emailEnabled', 'emailJobMatches', 'emailApplicationStatus', 'emailInterviews', 'emailMarketing',
      'smsEnabled', 'smsApplicationStatus', 'smsInterviews', 'smsUrgent',
      'pushEnabled', 'pushJobMatches', 'pushApplicationStatus', 'pushInterviews',
      'profileVisible', 'autoApply'
    ];

    if (!validSettings.includes(setting)) {
      return res.status(400).json({ error: 'Invalid setting name' });
    }

    // Update the specific setting
    const updateData = { [setting]: value };
    
    const settings = await prisma.notificationSettings.upsert({
      where: { applicantId: applicant.id },
      update: updateData,
      create: {
        applicantId: applicant.id,
        [setting]: value
      }
    });

    console.log(`✅ Updated ${setting} to ${value} for applicant ${applicant.id}`);

    res.json({
      success: true,
      message: `${setting} updated successfully`,
      settings: settings
    });
  } catch (error) {
    console.error('Error updating single notification setting:', error);
    res.status(500).json({ error: 'Failed to update notification setting' });
  }
};
