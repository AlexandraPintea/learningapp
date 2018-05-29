export class Quote {
    private bookid: string;
    private content: string;
 
     constructor(content:string, bookid:string) {
         this.content = content;
         this.bookid = bookid;
     }
 }