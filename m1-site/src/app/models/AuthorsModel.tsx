export type AuthorModel = {
    id: string
    firstName: string;
    lastName: string;
    numberBook?: number
    rating?: number
    authorImage: string

}
export type CreateAuthorModel = {
    firstName: string;
    lastName: string;
    biography?: string;
    photoPath?: string;
  };