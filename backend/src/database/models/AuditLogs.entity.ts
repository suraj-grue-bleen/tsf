import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';

@Entity('tbl_audit_logs')
export class AuditLog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column('json', { nullable: true })
  user: any;

  @Column()
  ip: string;

  @Column()
  method: string;

  @Column('json', { nullable: true })
  payload: any;

  @Column('json', { nullable: true })
  actions: any;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  start_time: Date;

  @Column('timestamp', { nullable: true })
  end_time: Date;

 
}
