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
    yearPublished: number
    rating: number
}