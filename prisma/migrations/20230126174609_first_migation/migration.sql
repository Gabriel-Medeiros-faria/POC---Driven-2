-- CreateTable
CREATE TABLE "character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "qtdTransformation" INTEGER NOT NULL,
    "missionId" INTEGER NOT NULL,
    "villageId" INTEGER NOT NULL,

    CONSTRAINT "character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mission" (
    "id" SERIAL NOT NULL,
    "missionLocation" TEXT NOT NULL,

    CONSTRAINT "mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "village" (
    "id" SERIAL NOT NULL,
    "villageName" TEXT NOT NULL,

    CONSTRAINT "village_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "character" ADD CONSTRAINT "fk_mission" FOREIGN KEY ("missionId") REFERENCES "mission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "character" ADD CONSTRAINT "fk_village" FOREIGN KEY ("villageId") REFERENCES "village"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
