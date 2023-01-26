import prisma from "../src/database/db.js"

async function main() {

    await prisma.mission.createMany({
        data: [
            {
                "missionLocation": "vale do fim"
            },
            {
                "missionLocation": "Luta com madara"
            },
            {
                "missionLocation": "Bater no sasuke"
            }
        ]
    });

    await prisma.village.createMany({
        data: [
            {
                "villageName": "vila do fogo"
            },
            {
                "villageName": "vila da água"
            },
            {
                "villageName": "vila da folha"
            }
        ]
    });

    await prisma.character.createMany({
        data: [
            {
                "name": "naruto",
                "power": 100000,
                "qtdTransformation": 10,
                "villageId": 1,
                "missionId": 1
            },
            {
                "name": "sakura",
                "power": 1,
                "qtdTransformation": 0,
                "villageId": 2,
                "missionId":2
            },
            {
                "name": "sasuke",
                "power": 10,
                "qtdTransformation": 5,
                "villageId": 3,
                "missionId": 3
            }
        ]
    })

    
}
main()
    .then(()=> {
        console.log("registro feito com sucesso!!")
    })
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async ()=> {
        await prisma.$disconnect()
    })