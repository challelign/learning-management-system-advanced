-- DropIndex
DROP INDEX `Course_title_idx` ON `course`;

-- CreateTable
CREATE TABLE `CourseRatting` (
    `id` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NULL,
    `review` TEXT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CourseRatting_courseId_idx`(`courseId`),
    UNIQUE INDEX `CourseRatting_userId_courseId_key`(`userId`, `courseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE FULLTEXT INDEX `Course_title_description_idx` ON `Course`(`title`, `description`);
