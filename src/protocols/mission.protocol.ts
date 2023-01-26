export type missionEntity = {
    id: number,
    missionLocation: string
}

export type Mission = Omit<missionEntity, "id">