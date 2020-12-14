export class Message {
  constructor(
    public type: string,
    public text: string
  ) { }
}

export class User {
  constructor(
    public email: string,
    public password: string,
    public name: string,
    public id?: number
  ) {}
  static transform(object: any): User {
    return  new User(object.name, object.email, object.id, object.password);
  }

  getPassword(): string {
    return this.password;
  }
  getEmail(): string {
    return this.email;
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
}
