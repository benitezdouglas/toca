/*
  Warnings:

  - You are about to drop the column `name` on the `ArtistGenre` table. All the data in the column will be lost.
  - You are about to drop the `_ArtistGenres` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `artist_id` to the `ArtistGenre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre_id` to the `ArtistGenre` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_person_id_fkey";

-- DropForeignKey
ALTER TABLE "_ArtistGenres" DROP CONSTRAINT "_ArtistGenres_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArtistGenres" DROP CONSTRAINT "_ArtistGenres_B_fkey";

-- DropIndex
DROP INDEX "ArtistGenre_name_key";

-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "artist_genre_id" INTEGER,
ADD COLUMN     "genre_id" INTEGER,
ADD COLUMN     "is_featured" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "person_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ArtistGenre" DROP COLUMN "name",
ADD COLUMN     "artist_id" INTEGER NOT NULL,
ADD COLUMN     "genre_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ArtistGenres";

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "artist_genre_id" INTEGER,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "image" VARCHAR(255),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CanPlayArtist" (
    "id" SERIAL NOT NULL,
    "artist_id" INTEGER NOT NULL,
    "genre_id" INTEGER,
    "Name" VARCHAR(100) NOT NULL,
    "Description" TEXT,
    "Image" VARCHAR(255),
    "Link" VARCHAR(255),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CanPlayArtist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- AddForeignKey
ALTER TABLE "ArtistGenre" ADD CONSTRAINT "ArtistGenre_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistGenre" ADD CONSTRAINT "ArtistGenre_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CanPlayArtist" ADD CONSTRAINT "CanPlayArtist_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CanPlayArtist" ADD CONSTRAINT "CanPlayArtist_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genre"("id") ON DELETE SET NULL ON UPDATE CASCADE;
