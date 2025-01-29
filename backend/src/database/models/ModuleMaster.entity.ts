import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { Employee } from './Employee.entity';
@Entity('tbl_module_masters')
export class ModuleMaster extends BaseEntity {

  @Column({ type: 'varchar', length: 60 })
  menu_name: string;

  @Column({ type: 'varchar', length: 50 })
  menu_link: string;

  @Column()
  parent_id: string;

  //Comment Sub-Menu,
  @Column()
  type: number;

  @Column({ type: 'float' })
  menu_order: number;

  @Column()
  created_by: number;

  @Column()
  updated_by: number;

   // Table Relations
   @ManyToOne(() => ModuleMaster)
   @JoinColumn({ name: 'parent_id' })
   module: ModuleMaster;

   @ManyToOne(() => Employee)
   @JoinColumn({ name: 'created_by' })
   created_by_user: Employee;
 
   @ManyToOne(() => Employee)
   @JoinColumn({ name: 'updated_by' })
   updated_by_user: Employee;
}
