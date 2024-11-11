export type BookModel = {
    id: string;
    title : string;
    yearPublished : number;
    author  : {
        id : string;
        firstName : string;
        lastName : string;
        biography? : string;
        photoPath? : string;
    };
    price : number;
    photoPath?: string;
}
