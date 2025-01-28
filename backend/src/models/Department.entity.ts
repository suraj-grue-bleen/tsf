
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  department_name: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => User, (user) => user.department)
  users: User[];
  
}