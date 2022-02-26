import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

interface IUsersRepository {
  create(user: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
