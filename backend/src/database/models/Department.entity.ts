import { BaseEntity } from 'src/utility/Base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('tbl_department_masters')
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  department_name: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @Column()
  created_by: number;

  @Column()
  updated_by: number;

  //Table Relation
  @ManyToOne(() => Department)
  @JoinColumn({ name: 'created_by' })
  created_by_user: Department;

  @ManyToOne(() => Department)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: Department;
}
