export class User {
  constructor(
    private name: string,
    private email: string,
    private id: number,
    private password: string
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
