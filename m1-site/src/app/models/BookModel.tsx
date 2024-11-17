export type BookModel = {
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