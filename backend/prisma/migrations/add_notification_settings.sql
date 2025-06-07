-- CreateTable
CREATE TABLE `NotificationSettings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `applicantId` INTEGER NOT NULL,
    `emailEnabled` BOOLEAN NOT NULL DEFAULT true,
    `emailJobMatches` BOOLEAN NOT NULL DEFAULT true,
    `emailApplicationStatus` BOOLEAN NOT NULL DEFAULT true,
    `emailInterviews` BOOLEAN NOT NULL DEFAULT true,
    `emailMarketing` BOOLEAN NOT NULL DEFAULT false,
    `smsEnabled` BOOLEAN NOT NULL DEFAULT false,
    `smsApplicationStatus` BOOLEAN NOT NULL DEFAULT false,
    `smsInterviews` BOOLEAN NOT NULL DEFAULT false,
    `smsUrgent` BOOLEAN NOT NULL DEFAULT false,
    `pushEnabled` BOOLEAN NOT NULL DEFAULT true,
    `pushJobMatches` BOOLEAN NOT NULL DEFAULT true,
    `pushApplicationStatus` BOOLEAN NOT NULL DEFAULT true,
    `pushInterviews` BOOLEAN NOT NULL DEFAULT true,
    `profileVisible` BOOLEAN NOT NULL DEFAULT true,
    `autoApply` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `NotificationSettings_applicantId_key`(`applicantId`),
    INDEX `NotificationSettings_applicantId_idx`(`applicantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NotificationSettings` ADD CONSTRAINT `NotificationSettings_applicantId_fkey` FOREIGN KEY (`applicantId`) REFERENCES `Applicant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
