import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private readonly usersRepository: IUsersRepository
  ) {}
  async execute({
    id,
    name,
    password,
    drive_license,
    email,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User Already Exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      id,
      name,
      password: passwordHash,
      drive_license,
      email,
      avatar,
    });
  }
}

export { CreateUserUseCase };
