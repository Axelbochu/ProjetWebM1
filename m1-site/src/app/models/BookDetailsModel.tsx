export type BookDetailsModel = {
    id: string
    title: string
    publishedYear: number
    price : number
    photoPath ?: string
    author: {
        id: string;
        firstName: string;
        lastName: string;
        biography?: string;
        photoPath?: string;
      };
    advices: {
        id: string;
        creationDate: string;
        comment: string;
        stars: number;
      };
}