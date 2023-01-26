export type villageEntity = {
    id: number,
    villageName: string
}

export type village = Omit<villageEntity, "id">