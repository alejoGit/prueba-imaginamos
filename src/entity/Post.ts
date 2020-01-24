import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column({ type: "datetime", nullable: true, default: null })
  created_at: Date;

  @ManyToOne(
    type => User,
    user => user.posts
  )
  user: User;

  @Column()
  userId: number;
}
