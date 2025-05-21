export interface Movie {
  id?: number;
  externalId: string;
  title: string;
  description: string;
  posterUrl: string;
  availableOn: string[];
  releaseYear: number;
  createdAt?: Date;
  updatedAt?: Date;
}
