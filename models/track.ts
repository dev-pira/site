export interface Track {
  name?: string;
  talks: Talk[];
}

export interface Talk {
  title: string;
  speaker: Speaker;
  time?: Date;
}

export interface Speaker {
  name: string;
  portraitUrl: string;
  job?: string;
}
