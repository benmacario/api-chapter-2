import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private readonly usersRepository: IUsersRepository
  ) {}
  async execute(user: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create(user);
  }
}

export { CreateUserUseCase };
