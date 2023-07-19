export interface Job extends CreateJobRequest {
  id: string;
}

export interface CreateJobRequest {
  title: string;
  company?: string;
  description: string;
  details?: string;
  enrollmentUrl: string;
  location: "Piracicaba" | "Remoto" | "Outro";
  desirableSkills?: string[];
}
