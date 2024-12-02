/*
  Warnings:

  - Added the required column `end` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `end` DATETIME(3) NOT NULL;
