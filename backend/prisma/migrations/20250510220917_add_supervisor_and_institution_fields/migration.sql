/*
  Warnings:

  - You are about to drop the column `supervisorEmail` on the `workexperience` table. All the data in the column will be lost.
  - You are about to drop the column `supervisorPhone` on the `workexperience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `workexperience` DROP COLUMN `supervisorEmail`,
    DROP COLUMN `supervisorPhone`,
    ADD COLUMN `institutionAddress` VARCHAR(191) NULL,
    ADD COLUMN `supervisorAddress` VARCHAR(191) NULL,
    ADD COLUMN `supervisorTel` VARCHAR(191) NULL;
