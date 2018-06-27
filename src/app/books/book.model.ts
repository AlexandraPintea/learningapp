export class Book {
   public author: string;
   private name: string;
   private description: string;
   private bookid: string;

    constructor(author: string, name: string, description: string, bookid: string) {
        this.author = author;
        this.name = name;
        this.description = description;
        this.bookid = bookid;
    }
}
