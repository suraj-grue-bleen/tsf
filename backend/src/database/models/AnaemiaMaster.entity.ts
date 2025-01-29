import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { Employee } from './Employee.entity';
import { Screening } from './ScreeningCategory.entity';
@Entity('tbl_role_masters')
export class AnaemiaMaster extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  screening_cat_id: number;

  @Column({ type: 'varchar', length: 20 })
  no_anaemia: string;

  @Column({ type: 'varchar', length: 20 })
  mild_anaemia: string;

  @Column({ type: 'varchar', length: 20 })
  moderate_anaemia: string;

  @Column({ type: 'varchar', length: 25 })
  severe_anaemia: string;

  @Column()
  created_by: number;

  @Column()
  updated_by: number;

  // Table Relations
  @ManyToOne(() => Screening)
  @JoinColumn({ name: 'screening_cat_id' })
  screening_category: Screening;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'created_by' })
  created_by_user: Employee;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: Employee;
}
