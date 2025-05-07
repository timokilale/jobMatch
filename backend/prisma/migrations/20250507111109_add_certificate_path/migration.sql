/*
  Warnings:

  - You are about to drop the column `degree` on the `academicqualification` table. All the data in the column will be lost.
  - Added the required column `country` to the `AcademicQualification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `AcademicQualification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `academicqualification` DROP COLUMN `degree`,
    ADD COLUMN `certificateUrl` VARCHAR(191) NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `level` VARCHAR(191) NOT NULL;
