/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `minimum` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `cost` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `venueId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Venue` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Venue` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_venueId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropForeignKey
ALTER TABLE "Venue" DROP CONSTRAINT "Venue_organizationId_fkey";

-- DropIndex
DROP INDEX "Organization_slug_key";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "createdAt",
DROP COLUMN "minimum",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "slug",
DROP COLUMN "status",
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cost",
DROP COLUMN "status",
DROP COLUMN "type",
DROP COLUMN "venueId",
ADD COLUMN     "stock" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "createdAt",
DROP COLUMN "status",
DROP COLUMN "type",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Table" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "roleId" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Venue" DROP COLUMN "address",
DROP COLUMN "status",
ALTER COLUMN "organizationId" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "OrderEvent" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrderEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venue" ADD CONSTRAINT "Venue_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderEvent" ADD CONSTRAINT "OrderEvent_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
