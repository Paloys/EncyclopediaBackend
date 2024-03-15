import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ingredient } from '../../entities/ingredient.entity';
import { Role } from '../roles/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50, unique: true })
  username: string;

  // Password
  @Column('varchar', { length: 255 })
  password: string;

  @Column('timestamp without time zone', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.discoveredBy)
  ingredients: Ingredient[];

  @Column({ type: 'enum', enum: Role, default: 'user' })
  role: Role;
}
