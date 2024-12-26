import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuditLogs {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', length: 7 })
  user_id: number;

  @Column({ type: 'json', length: 255 })
  req: string;

  @Column({ type: 'json'})
  actions: string;

  @Column({ type: 'text' })
  ip: string;

  @Column({ type: 'text' })
  method: string;

  @Column({ type:'time'})
  created_at: Date

}