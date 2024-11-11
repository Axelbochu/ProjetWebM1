export type AuthorModel = {
  id: string;
  firstName: string;
  lastName: string;
  biography?: string;
  photoPath?: string;
};

export type CreateAuthorModel = {
  firstName : string
  lastName : string
  biography? : string 
  photoPath? : string
}