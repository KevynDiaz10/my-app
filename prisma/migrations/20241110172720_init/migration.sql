/*
  Warnings:

  - You are about to drop the column `allday` on the `event` table. All the data in the column will be lost.
  - Added the required column `cif` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImage` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allDay` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descrition` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `company` ADD COLUMN `cif` TEXT NOT NULL,
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `profileImage` TEXT NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    ADD COLUMN `website` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `contact` MODIFY `companyId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `allday`,
    ADD COLUMN `allDay` BOOLEAN NOT NULL,
    ADD COLUMN `descrition` VARCHAR(191) NOT NULL;
