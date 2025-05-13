-- CreateTable
CREATE TABLE `JobCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `JobCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ApplicantCategories` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ApplicantCategories_AB_unique`(`A`, `B`),
    INDEX `_ApplicantCategories_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_JobCategories` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_JobCategories_AB_unique`(`A`, `B`),
    INDEX `_JobCategories_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ApplicantCategories` ADD CONSTRAINT `_ApplicantCategories_A_fkey` FOREIGN KEY (`A`) REFERENCES `Applicant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ApplicantCategories` ADD CONSTRAINT `_ApplicantCategories_B_fkey` FOREIGN KEY (`B`) REFERENCES `JobCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JobCategories` ADD CONSTRAINT `_JobCategories_A_fkey` FOREIGN KEY (`A`) REFERENCES `Job`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JobCategories` ADD CONSTRAINT `_JobCategories_B_fkey` FOREIGN KEY (`B`) REFERENCES `JobCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
