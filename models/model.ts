export interface Event {
    key: string
    title: string
    shortDescription: string
    description: string
    dateTime: Date
    place: string
    otherInfo?: string
    partners?: string[]
    tracks?: Track[]
}

export interface Track {
    name?: string,
    talks: Talk[]
}

export interface Talk {
    title: string, 
    speaker: string, 
    speakerJob?: string, 
    time?: Date
}