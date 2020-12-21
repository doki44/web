export class Post {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public date: string,
    public text: string,
    public category: string
  ) {}
  static transform(object: any): Post {
    return  new Post(object.id, object.title, object.author, object.date, object.text, object.category);
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }
  getAuthor(): string {
    return this.author;
  }
  getDate(): string {
    return this.date;
  }
  getText(): string {
    return this.text;
  }
  getCategory(): string {
    return this.category;
  }
}
