/*
  Warnings:

  - You are about to drop the column `company` on the `workexperience` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `workexperience` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `workexperience` table. All the data in the column will be lost.
  - Added the required column `institution` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobTitle` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `workexperience` DROP COLUMN `company`,
    DROP COLUMN `description`,
    DROP COLUMN `position`,
    ADD COLUMN `duties` VARCHAR(191) NULL,
    ADD COLUMN `institution` VARCHAR(191) NOT NULL,
    ADD COLUMN `jobTitle` VARCHAR(191) NOT NULL,
    ADD COLUMN `supervisorEmail` VARCHAR(191) NULL,
    ADD COLUMN `supervisorName` VARCHAR(191) NULL,
    ADD COLUMN `supervisorPhone` VARCHAR(191) NULL;
