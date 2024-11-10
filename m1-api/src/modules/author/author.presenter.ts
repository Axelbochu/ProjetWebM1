export class AuthorPresenter {
  id: string;
  firstName: string;
  lastName: string;
  biography?: string;
  photoPath?: string;

  private constructor(author: AuthorPresenter) {
    Object.assign(this, author);
  }

  public static from(author: AuthorPresenter): AuthorPresenter {
    return new AuthorPresenter({
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      biography: author.biography,
      photoPath: author.photoPath,
    });
  }
}
