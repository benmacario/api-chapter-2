import { hash } from "bcrypt";
import { getConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function createSeed() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, is_admin, created_at, drive_license)
        values('${id}', 'admin', 'admin@chapterTwo.com.br', '${password}', true, 'now()', '1234567')`
  );

  await connection.close();
}

createSeed().then(() => console.log("User admin created!"));
