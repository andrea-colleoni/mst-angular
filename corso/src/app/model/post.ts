export class Post {
  userId: number;
  id:  number;
  title: string;
  body: string;

  get abstract(): string {
    return this.body.substr(0, 50);
  }
}
