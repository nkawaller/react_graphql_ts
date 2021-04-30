import { Field, ObjectType } from "type-graphql";
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Upvote extends BaseEntity {
    @Field()
    @Column({type: 'int'})
    value: number

  @Field()
  @PrimaryColumn()
  userId: number;

  @Field()
  @ManyToOne(()=> User, user => user.upvotes)
  user: User;

  @Field()
  @PrimaryColumn()
  postId: number;

  @Field()
  @ManyToOne(()=> Post, (post) => post.upvotes)
  post: Post;
}
