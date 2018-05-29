export class Book {
   private author: string;
   private name: string;
   private description: string;

    constructor(author:string, name:string, description:string) {
        this.author = author;
        this.name = name;
        this.description = description;
    }
}