import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { Employee } from './Employee.entity';
@Entity('tbl_role_masters')
export class KpiMappingMaster extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int'})
  total_block: number;

  @Column({type: 'int'})
  total_nutrition_garden: number;

  @Column({type: 'int'})
  total_area_covered: number;

  @Column({type: 'int'})
  total_anganbari_center: number;

  @Column({type: 'int'})
  total_under_5_child: number;

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
