export type BookModel = {
    id: string
    picture ?: string
    title: string
    price : number
    author: {
        id: string;
        firstName: string;
        lastName: string;
        biography?: string;
        photoPath?: string;
      };
    publishedYear: number
    averageRating: number
}

export type BookModel2 = {
  id: string
  photoPath ?: string
  title: string
  price : number
  author: {
      id: string;
      firstName: string;
      lastName: string;
      biography?: string;
      photoPath?: string;
    };
  publishedYear: number
  averageRating: number
}