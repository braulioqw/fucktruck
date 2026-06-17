import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { Category } from 'src/categories/entities/category.entity';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column('decimal')
  price!: number;

  @Column()
  image!: string;

  @Column({ default: true })
  isAvailable!: boolean;

  @ManyToOne(
    () => Category,
    (category) => category.foods,
    { nullable: false },
  )
  category!: Category;
}