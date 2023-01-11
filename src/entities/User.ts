import { ValidationError } from "../errors/ValidationError";

export enum Role {
  author = 'author',
  admin = 'admin'
}

export abstract class User {
  private static EMAIL_REGER = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  private email: string;
  private password: string;
  private role: Role;

  constructor(email: string, password: string, role: Role) {
    this.validateEmail(email);

    this.email = email;
    this.password = password;
    this.role = role;
  }

  protected abstract validatePassword(password: string): void;

  private validateEmail(email: string) {
    const isValid = User.EMAIL_REGER.test(email);

    if (!isValid) {
      throw new ValidationError("INVALID_EMAIL");
    }
  }
}
