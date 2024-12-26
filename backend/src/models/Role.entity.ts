import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 25 })
  display_name: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
  
}