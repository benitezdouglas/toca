/*
  Warnings:

  - A unique constraint covering the columns `[instagram]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[facebook]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[twitter]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[youtube]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tiktok]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[spotify]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[soundcloud]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appleMusic]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bandcamp]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[website]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[discord]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - Made the column `person_id` on table `Artist` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_person_id_fkey";

-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "about" TEXT,
ADD COLUMN     "appleMusic" VARCHAR(100),
ADD COLUMN     "bandcamp" VARCHAR(100),
ADD COLUMN     "discord" VARCHAR(100),
ADD COLUMN     "facebook" VARCHAR(100),
ADD COLUMN     "image" VARCHAR(255),
ADD COLUMN     "instagram" VARCHAR(100),
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "soundcloud" VARCHAR(100),
ADD COLUMN     "spotify" VARCHAR(100),
ADD COLUMN     "tiktok" VARCHAR(100),
ADD COLUMN     "twitter" VARCHAR(100),
ADD COLUMN     "website" VARCHAR(255),
ADD COLUMN     "youtube" VARCHAR(100),
ALTER COLUMN "person_id" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Artist_instagram_key" ON "Artist"("instagram");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_facebook_key" ON "Artist"("facebook");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_twitter_key" ON "Artist"("twitter");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_youtube_key" ON "Artist"("youtube");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_tiktok_key" ON "Artist"("tiktok");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_spotify_key" ON "Artist"("spotify");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_soundcloud_key" ON "Artist"("soundcloud");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_appleMusic_key" ON "Artist"("appleMusic");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_bandcamp_key" ON "Artist"("bandcamp");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_website_key" ON "Artist"("website");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_discord_key" ON "Artist"("discord");

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
