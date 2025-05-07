/*
  Warnings:

  - Made the column `fieldOfStudy` on table `academicqualification` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `academicqualification` MODIFY `fieldOfStudy` VARCHAR(191) NOT NULL;
