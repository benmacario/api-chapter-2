import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create(user: ICreateUserDTO): Promise<void> {
    const repository = this.repository.create(user);

    await this.repository.save(repository);
  }
}

export { UsersRepository };
