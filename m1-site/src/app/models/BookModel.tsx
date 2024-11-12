export type BookModel = {
    id: string
    coverImage ?: string
    title: string
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