import { AuthorUser } from '../entities/AuthorUser';
import { AdminUser } from '../entities/AdminUser';
import { Role, User } from '../entities/User';

export interface CreateUserRepository {
  create(user: User): Promise<{id: number}>;
}

export class CreateUserService {
  constructor(private repository: CreateUserRepository) {}

  async create(email: string, password: string, role: string) {
    const user = this.getUserInstance(email, password, role);

    const { id } = await this.repository.create(user);

    return { id }
  }

  private getUserInstance(email: string, password: string, role: string): User {
    if (role === Role.author) {
      return new AuthorUser(email, password);
    } else if (role === Role.admin) {
      return new AdminUser(email, password);
    } 
    
    throw new Error("INVALID_ROLE");
  }
}