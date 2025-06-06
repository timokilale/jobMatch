/*
  Warnings:

  - A unique constraint covering the columns `[applicantId,jobId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `proficiency` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NULL,
    `applicantId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Application_status_idx` ON `Application`(`status`);

-- CreateIndex
CREATE INDEX `Application_createdAt_idx` ON `Application`(`createdAt`);

-- CreateIndex
CREATE INDEX `Application_applicantId_jobId_idx` ON `Application`(`applicantId`, `jobId`);

-- CreateIndex
CREATE UNIQUE INDEX `Application_applicantId_jobId_key` ON `Application`(`applicantId`, `jobId`);

-- CreateIndex
CREATE INDEX `Job_status_idx` ON `Job`(`status`);

-- CreateIndex
CREATE INDEX `Job_createdAt_idx` ON `Job`(`createdAt`);

-- CreateIndex
CREATE INDEX `Job_status_createdAt_idx` ON `Job`(`status`, `createdAt`);

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_applicantId_fkey` FOREIGN KEY (`applicantId`) REFERENCES `Applicant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RedefineIndex
CREATE INDEX `Application_applicantId_idx` ON `Application`(`applicantId`);
DROP INDEX `Application_applicantId_fkey` ON `application`;

-- RedefineIndex
CREATE INDEX `Application_jobId_idx` ON `Application`(`jobId`);
DROP INDEX `Application_jobId_fkey` ON `application`;

-- RedefineIndex
CREATE INDEX `Job_employerId_idx` ON `Job`(`employerId`);
DROP INDEX `Job_employerId_fkey` ON `job`;
