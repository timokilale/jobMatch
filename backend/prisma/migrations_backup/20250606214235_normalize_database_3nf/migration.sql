/*
  Warnings:

  - You are about to drop the column `country` on the `academicqualification` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `application` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(5))`.
  - You are about to drop the column `applicants` on the `job` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `job` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to drop the column `read` on the `languageproficiency` table. All the data in the column will be lost.
  - You are about to drop the column `speak` on the `languageproficiency` table. All the data in the column will be lost.
  - You are about to drop the column `write` on the `languageproficiency` table. All the data in the column will be lost.
  - You are about to drop the column `skillName` on the `skilldemand` table. All the data in the column will be lost.
  - You are about to drop the column `duties` on the `workexperience` table. All the data in the column will be lost.
  - You are about to drop the column `institution` on the `workexperience` table. All the data in the column will be lost.
  - You are about to drop the column `institutionAddress` on the `workexperience` table. All the data in the column will be lost.
  - You are about to drop the column `supervisorAddress` on the `workexperience` table. All the data in the column will be lost.
  - You are about to drop the column `supervisorTel` on the `workexperience` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[applicantId,jobId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `countryId` to the `AcademicQualification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AcademicQualification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Employer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `JobCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readLevel` to the `LanguageProficiency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speakLevel` to the `LanguageProficiency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `LanguageProficiency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `writeLevel` to the `LanguageProficiency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillMasterId` to the `SkillDemand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `academicqualification` DROP FOREIGN KEY `AcademicQualification_applicantId_fkey`;

-- DropForeignKey
ALTER TABLE `computerskill` DROP FOREIGN KEY `ComputerSkill_applicantId_fkey`;

-- DropForeignKey
ALTER TABLE `languageproficiency` DROP FOREIGN KEY `LanguageProficiency_applicantId_fkey`;

-- DropForeignKey
ALTER TABLE `workexperience` DROP FOREIGN KEY `WorkExperience_applicantId_fkey`;

-- AlterTable
ALTER TABLE `academicqualification` DROP COLUMN `country`,
    ADD COLUMN `countryId` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `grade` VARCHAR(191) NULL,
    ADD COLUMN `isCompleted` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `applicant` ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `dateOfBirth` DATETIME(3) NULL,
    ADD COLUMN `gender` VARCHAR(191) NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `profileCompleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `application` ADD COLUMN `appliedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `coverLetter` TEXT NULL,
    ADD COLUMN `notes` TEXT NULL,
    ADD COLUMN `rejectionReason` VARCHAR(191) NULL,
    ADD COLUMN `reviewedAt` DATETIME(3) NULL,
    ADD COLUMN `reviewedBy` INTEGER NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `status` ENUM('APPLIED', 'UNDER_REVIEW', 'INTERVIEW_SCHEDULED', 'INTERVIEWED', 'ACCEPTED', 'REJECTED', 'WITHDRAWN') NOT NULL DEFAULT 'APPLIED';

-- AlterTable
ALTER TABLE `chatmessage` MODIFY `message` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `computerskill` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `employer` ADD COLUMN `companySize` VARCHAR(191) NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `industry` VARCHAR(191) NULL,
    ADD COLUMN `isVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `website` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `interview` ADD COLUMN `jobId` INTEGER NULL,
    MODIFY `notes` TEXT NULL;

-- AlterTable
ALTER TABLE `job` DROP COLUMN `applicants`,
    ADD COLUMN `applicationCount` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `currency` VARCHAR(191) NULL DEFAULT 'USD',
    ADD COLUMN `employmentType` VARCHAR(191) NULL,
    ADD COLUMN `experienceLevel` VARCHAR(191) NULL,
    ADD COLUMN `expiresAt` DATETIME(3) NULL,
    ADD COLUMN `salaryMax` DECIMAL(10, 2) NULL,
    ADD COLUMN `salaryMin` DECIMAL(10, 2) NULL,
    ADD COLUMN `viewCount` INTEGER NOT NULL DEFAULT 0,
    MODIFY `description` TEXT NOT NULL,
    MODIFY `status` ENUM('DRAFT', 'ACTIVE', 'PAUSED', 'CLOSED', 'EXPIRED') NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE `jobcategory` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `languageproficiency` DROP COLUMN `read`,
    DROP COLUMN `speak`,
    DROP COLUMN `write`,
    ADD COLUMN `certificationName` VARCHAR(191) NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `isCertified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `readLevel` VARCHAR(191) NOT NULL,
    ADD COLUMN `speakLevel` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `writeLevel` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `skilldemand` DROP COLUMN `skillName`,
    ADD COLUMN `skillMasterId` INTEGER NOT NULL,
    ADD COLUMN `source` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `lastLogin` DATETIME(3) NULL,
    MODIFY `role` ENUM('APPLICANT', 'EMPLOYER', 'ADMIN') NOT NULL;

-- AlterTable
ALTER TABLE `workexperience` DROP COLUMN `duties`,
    DROP COLUMN `institution`,
    DROP COLUMN `institutionAddress`,
    DROP COLUMN `supervisorAddress`,
    DROP COLUMN `supervisorTel`,
    ADD COLUMN `achievements` TEXT NULL,
    ADD COLUMN `companyName` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `employmentType` VARCHAR(191) NULL,
    ADD COLUMN `industry` VARCHAR(191) NULL,
    ADD COLUMN `isCurrent` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `location` VARCHAR(191) NULL,
    ADD COLUMN `responsibilities` TEXT NULL,
    ADD COLUMN `supervisorContact` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `SkillMaster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SkillMaster_name_key`(`name`),
    INDEX `SkillMaster_category_idx`(`category`),
    INDEX `SkillMaster_name_idx`(`name`),
    INDEX `SkillMaster_isActive_idx`(`isActive`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Country` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Country_name_key`(`name`),
    UNIQUE INDEX `Country_code_key`(`code`),
    INDEX `Country_code_idx`(`code`),
    INDEX `Country_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JobRequirement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jobId` INTEGER NOT NULL,
    `skillMasterId` INTEGER NOT NULL,
    `importance` ENUM('REQUIRED', 'PREFERRED', 'NICE_TO_HAVE') NOT NULL DEFAULT 'PREFERRED',
    `proficiencyLevel` ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT') NOT NULL DEFAULT 'INTERMEDIATE',
    `yearsRequired` INTEGER NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `JobRequirement_jobId_idx`(`jobId`),
    INDEX `JobRequirement_skillMasterId_idx`(`skillMasterId`),
    INDEX `JobRequirement_importance_idx`(`importance`),
    INDEX `JobRequirement_proficiencyLevel_idx`(`proficiencyLevel`),
    UNIQUE INDEX `JobRequirement_jobId_skillMasterId_key`(`jobId`, `skillMasterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ApplicantSkill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `applicantId` INTEGER NOT NULL,
    `skillMasterId` INTEGER NOT NULL,
    `proficiency` ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT') NOT NULL DEFAULT 'INTERMEDIATE',
    `yearsExperience` INTEGER NULL,
    `lastUsed` DATETIME(3) NULL,
    `isCertified` BOOLEAN NOT NULL DEFAULT false,
    `certificationName` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ApplicantSkill_applicantId_idx`(`applicantId`),
    INDEX `ApplicantSkill_skillMasterId_idx`(`skillMasterId`),
    INDEX `ApplicantSkill_proficiency_idx`(`proficiency`),
    UNIQUE INDEX `ApplicantSkill_applicantId_skillMasterId_key`(`applicantId`, `skillMasterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `AcademicQualification_countryId_idx` ON `AcademicQualification`(`countryId`);

-- CreateIndex
CREATE INDEX `AcademicQualification_level_idx` ON `AcademicQualification`(`level`);

-- CreateIndex
CREATE INDEX `AcademicQualification_fieldOfStudy_idx` ON `AcademicQualification`(`fieldOfStudy`);

-- CreateIndex
CREATE INDEX `Applicant_nida_idx` ON `Applicant`(`nida`);

-- CreateIndex
CREATE INDEX `Applicant_userId_idx` ON `Applicant`(`userId`);

-- CreateIndex
CREATE INDEX `Applicant_profileCompleted_idx` ON `Applicant`(`profileCompleted`);

-- CreateIndex
CREATE INDEX `Application_status_idx` ON `Application`(`status`);

-- CreateIndex
CREATE INDEX `Application_createdAt_idx` ON `Application`(`createdAt`);

-- CreateIndex
CREATE INDEX `Application_appliedAt_idx` ON `Application`(`appliedAt`);

-- CreateIndex
CREATE UNIQUE INDEX `Application_applicantId_jobId_key` ON `Application`(`applicantId`, `jobId`);

-- CreateIndex
CREATE INDEX `ComputerSkill_skill_idx` ON `ComputerSkill`(`skill`);

-- CreateIndex
CREATE INDEX `Employer_userId_idx` ON `Employer`(`userId`);

-- CreateIndex
CREATE INDEX `Employer_industry_idx` ON `Employer`(`industry`);

-- CreateIndex
CREATE INDEX `Employer_isVerified_idx` ON `Employer`(`isVerified`);

-- CreateIndex
CREATE INDEX `Interview_jobId_idx` ON `Interview`(`jobId`);

-- CreateIndex
CREATE INDEX `Interview_status_idx` ON `Interview`(`status`);

-- CreateIndex
CREATE INDEX `Interview_scheduledAt_idx` ON `Interview`(`scheduledAt`);

-- CreateIndex
CREATE INDEX `Job_status_idx` ON `Job`(`status`);

-- CreateIndex
CREATE INDEX `Job_createdAt_idx` ON `Job`(`createdAt`);

-- CreateIndex
CREATE INDEX `Job_status_createdAt_idx` ON `Job`(`status`, `createdAt`);

-- CreateIndex
CREATE INDEX `Job_experienceLevel_idx` ON `Job`(`experienceLevel`);

-- CreateIndex
CREATE INDEX `Job_employmentType_idx` ON `Job`(`employmentType`);

-- CreateIndex
CREATE INDEX `JobCategory_name_idx` ON `JobCategory`(`name`);

-- CreateIndex
CREATE INDEX `JobCategory_isActive_idx` ON `JobCategory`(`isActive`);

-- CreateIndex
CREATE INDEX `LanguageProficiency_language_idx` ON `LanguageProficiency`(`language`);

-- CreateIndex
CREATE INDEX `MarketTrend_industry_idx` ON `MarketTrend`(`industry`);

-- CreateIndex
CREATE INDEX `MarketTrend_metric_idx` ON `MarketTrend`(`metric`);

-- CreateIndex
CREATE INDEX `MarketTrend_date_idx` ON `MarketTrend`(`date`);

-- CreateIndex
CREATE INDEX `SkillDemand_skillMasterId_idx` ON `SkillDemand`(`skillMasterId`);

-- CreateIndex
CREATE INDEX `SkillDemand_industry_idx` ON `SkillDemand`(`industry`);

-- CreateIndex
CREATE INDEX `SkillDemand_region_idx` ON `SkillDemand`(`region`);

-- CreateIndex
CREATE INDEX `SkillDemand_period_idx` ON `SkillDemand`(`period`);

-- CreateIndex
CREATE INDEX `User_email_idx` ON `User`(`email`);

-- CreateIndex
CREATE INDEX `User_role_idx` ON `User`(`role`);

-- CreateIndex
CREATE INDEX `User_isActive_idx` ON `User`(`isActive`);

-- CreateIndex
CREATE INDEX `WorkExperience_industry_idx` ON `WorkExperience`(`industry`);

-- CreateIndex
CREATE INDEX `WorkExperience_isCurrent_idx` ON `WorkExperience`(`isCurrent`);

-- AddForeignKey
ALTER TABLE `JobRequirement` ADD CONSTRAINT `JobRequirement_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JobRequirement` ADD CONSTRAINT `JobRequirement_skillMasterId_fkey` FOREIGN KEY (`skillMasterId`) REFERENCES `SkillMaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApplicantSkill` ADD CONSTRAINT `ApplicantSkill_applicantId_fkey` FOREIGN KEY (`applicantId`) REFERENCES `Applicant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApplicantSkill` ADD CONSTRAINT `ApplicantSkill_skillMasterId_fkey` FOREIGN KEY (`skillMasterId`) REFERENCES `SkillMaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcademicQualification` ADD CONSTRAINT `AcademicQualification_applicantId_fkey` FOREIGN KEY (`applicantId`) REFERENCES `Applicant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcademicQualification` ADD CONSTRAINT `AcademicQualification_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkExperience` ADD CONSTRAINT `WorkExperience_applicantId_fkey` FOREIGN KEY (`applicantId`) REFERENCES `Applicant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LanguageProficiency` ADD CONSTRAINT `LanguageProficiency_applicantId_fkey` FOREIGN KEY (`applicantId`) REFERENCES `Applicant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComputerSkill` ADD CONSTRAINT `ComputerSkill_applicantId_fkey` FOREIGN KEY (`applicantId`) REFERENCES `Applicant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SkillDemand` ADD CONSTRAINT `SkillDemand_skillMasterId_fkey` FOREIGN KEY (`skillMasterId`) REFERENCES `SkillMaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Interview` ADD CONSTRAINT `Interview_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RedefineIndex
CREATE INDEX `AcademicQualification_applicantId_idx` ON `AcademicQualification`(`applicantId`);
DROP INDEX `AcademicQualification_applicantId_fkey` ON `academicqualification`;

-- RedefineIndex
CREATE INDEX `Application_applicantId_idx` ON `Application`(`applicantId`);
DROP INDEX `Application_applicantId_fkey` ON `application`;

-- RedefineIndex
CREATE INDEX `Application_jobId_idx` ON `Application`(`jobId`);
DROP INDEX `Application_jobId_fkey` ON `application`;

-- RedefineIndex
CREATE INDEX `ComputerSkill_applicantId_idx` ON `ComputerSkill`(`applicantId`);
DROP INDEX `ComputerSkill_applicantId_fkey` ON `computerskill`;

-- RedefineIndex
CREATE INDEX `Interview_applicationId_idx` ON `Interview`(`applicationId`);
DROP INDEX `Interview_applicationId_fkey` ON `interview`;

-- RedefineIndex
CREATE INDEX `Job_employerId_idx` ON `Job`(`employerId`);
DROP INDEX `Job_employerId_fkey` ON `job`;

-- RedefineIndex
CREATE INDEX `LanguageProficiency_applicantId_idx` ON `LanguageProficiency`(`applicantId`);
DROP INDEX `LanguageProficiency_applicantId_fkey` ON `languageproficiency`;

-- RedefineIndex
CREATE INDEX `WorkExperience_applicantId_idx` ON `WorkExperience`(`applicantId`);
DROP INDEX `WorkExperience_applicantId_fkey` ON `workexperience`;
