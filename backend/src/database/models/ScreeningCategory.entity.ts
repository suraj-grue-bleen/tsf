import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { Employee } from './Employee.entity';
@Entity('tbl_screening_category')
export class Screening extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column()
  created_by: number;

  @Column()
  updated_by: number;

  // Table Relations
  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'created_by' })
  created_by_user: Employee;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: Employee;
}
