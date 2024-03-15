import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 10 })
  emoji: string;

  @Column('int')
  discoveredBy: number;
}
