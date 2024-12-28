import { Column, Entity, OneToOne,JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Otp {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  email_id: string;

  @Column({ type: 'int' })
  user_id: number;

  @Column({ type: 'varchar', length: 15 })
  otp: string;

  @Column({ type: 'int' })
  count: number;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({ type: 'time' })
  last_seen_at: Date;

  @Column({ type: 'time' })
  expiry_at: Date;

  @Column({ type: 'varchar' })
  created_at: string;

  @OneToOne(() => User, (user) => user.otp)
  @JoinColumn({ name: 'user_id' }) // Foreign key column for the relation
  user: User;
}