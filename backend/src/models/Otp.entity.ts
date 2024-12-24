import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  email_id: string;

  @Column({ type: 'int', length: 40 })
  user_id: string;

  @Column({ type: 'varchar', length: 15 })
  otp: string;

  @Column({ type: 'int' })
  count: number;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({ type: 'varchar' })
  last_seen_at: string;

  @Column({ type: 'varchar' })
  expiry_at: string;

  @Column({ type: 'varchar' })
  created_at: string;
}