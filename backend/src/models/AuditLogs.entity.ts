import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';
@Entity()
export class AuditLogs {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  user_id: number;

  @Column({ type: 'json' })
  req: string;

  @Column({ type: 'json'})
  actions: string;

  @Column({ type: 'text' })
  ip: string;

  @Column({ type: 'text' })
  method: string;

  @Column({ type:'time'})
  created_at: Date;

  @ManyToOne(() => User, (user) => user.auditLogs, { onDelete: 'CASCADE' })
  user: User;

}