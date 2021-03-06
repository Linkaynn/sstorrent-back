import { Token } from "./token";

export class User {
  public username : string;
  public name : string;
  public email : string;
  public token : Token;

  public mirrors : string[] = [];

  constructor(username: string, name: string, email : string, token) {
    this.name = name;
    this.username = username
    this.email = email
    this.token = new Token(token.token, parseInt(token.expires));
  }

  public setMirrors(mirrors) {
    this.mirrors = mirrors;
  }

  public isAdmin() {
    return this.username == 'root';
  }
}
