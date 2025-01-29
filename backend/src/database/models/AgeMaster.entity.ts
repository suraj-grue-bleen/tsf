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

@Entity('tbl_age_masters')
export class AgeMaster extends BaseEntity {
  
  @PrimaryGeneratedColumn() 
  id: number;

  @Column()
  screening_cat_id: number;

  @Column({type: 'int'})
  from: number;

  @Column({type: 'int'})
  to: number;

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
