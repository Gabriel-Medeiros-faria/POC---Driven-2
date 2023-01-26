export type CharactersEntity = {
    id: number,
    name: string,
    power: number,
    qtdTransformation: number,
    missionId: number,
    villageId: number
}

export type Character = Omit<CharactersEntity, "id">