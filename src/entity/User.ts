import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany
} from "typeorm";
import * as bcrypt from "bcryptjs";
import { Post } from "./Post";
@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(
    type => Post,
    post => post.user
  )
  posts: Post[];

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
