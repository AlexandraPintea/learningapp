export class Book {
    public author: string;
    private authorid: string;
    private description: string;
    private name: string;

    constructor(author: string, authorid: string, description: string, name: string) {
      this.author = author;
      this.authorid = authorid;
      this.description = description;
      this.name = name;
    }
}
