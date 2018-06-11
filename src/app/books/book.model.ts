export class Book {
   private author: string;
   private name: string;
   private description: string;
   private id: string;

    constructor(author: string, name: string, description: string, id: string) {
        this.author = author;
        this.name = name;
        this.description = description;
        this.id = id;
    }
}
