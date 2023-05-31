export interface Event {
    key: string
    title: string
    shortDescription: string
    description: string
    dateTime: Date
    place: string
    otherInfo?: string
    partners?: Partner[]
    tracks?: Track[]
}

export interface Partner {
    name: string
    logoUrl?: string
    category?: string
}
export interface Track {
    name?: string
    talks: Talk[]
}

export interface Talk {
    title: string
    speaker: Speaker
    time?: Date
}

export interface Speaker {
    name: string
    portraitUrl: string
    job?: string
}

export interface Job extends CreateJobRequest {
    id: string
}

export interface CreateJobRequest {
    title: string
    company?: string
    description: string
    details?:string
    enrollmentUrl: string
    location: 'Piracicaba' | 'Remoto' | 'Outro'
    desirableSkills?:string[]
}