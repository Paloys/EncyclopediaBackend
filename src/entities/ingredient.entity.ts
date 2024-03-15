import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../auth/users/users.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 10 })
  emoji: string;

  @ManyToOne(() => User, (user: User) => user.ingredients, {
    nullable: false,
  })
  discoveredBy: User;
}
