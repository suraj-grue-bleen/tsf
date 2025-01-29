import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { Employee } from './Employee.entity';
import { State } from './State.entity';
import { District } from './District.entity';
import { Block } from './Block.entity';
import { Unit } from './Unit.entity';
import { Panchayat } from './Panchayat.entity';
import { Village } from './Village.entity';
import { Tola } from './Tola.entity';

@Entity('tbl_employee_masters')
export class AnganbariSevika extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  anganbari_name: string;

  @Column({ type: 'varchar', length: 50 })
  anganbari_code: string;

  @Column({ type: 'varchar', length: 50 })
  sevika_name: string;

  @Column({ type: 'varchar', length: 10 })
  sevika_phone_number: string;

  @Column({ type: 'varchar', length: 50 })
  achivement_count: string;

  @Column({ type: 'varchar', length: 30 })
  session: string;

  @Column({type: 'int'})
  state_id: number;

  @Column({type: 'int'})
  district_id: number;

  @Column({type: 'int'})
  block_id: number;

  @Column({type: 'int'})
  unit_id: number;

  @Column({type: 'int'})
  panchayat_id: number;

  @Column({type: 'int'})
  village_id: number;

  @Column({type: 'int'})
  tola_id: number;

  @Column({type: 'int'})
  status: number;
 
  @Column({type: 'int'})
  created_by: number;

  @Column({type: 'int'})
  updated_by: number;

  // Table Relations
  @ManyToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state: State;

  @ManyToOne(() => District)
  @JoinColumn({ name: 'district_id' })
  district: District;

  @ManyToOne(() => Block)
  @JoinColumn({ name: 'block_id' })
  block: Block;

  @ManyToOne(() => Unit)
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @ManyToOne(() => Panchayat)
  @JoinColumn({ name: 'panchayat_id' })
  panchayat: Panchayat;

  @ManyToOne(() => Village)
  @JoinColumn({ name: 'village_id' })
  village: Village;

  @ManyToOne(() => Tola)
  @JoinColumn({ name: 'tola_id' })
  tola: Tola;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'created_by' })
  created_by_user: Employee;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: Employee;
}
