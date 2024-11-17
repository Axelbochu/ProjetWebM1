export interface AdviceModel {
    id: string;
    stars: number;
    comment: string;
    creationDate: string;
    bookId: string;
  }

  export interface Advice {
    id: string; // id doit être toujours une chaîne (pas undefined)
    stars: number;
    comment: string;
    creationDate: string;
    bookId: string;
  }