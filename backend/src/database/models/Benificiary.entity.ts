import { BaseEntity } from 'src/utility/Base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './Employee.entity';
import { State } from './State.entity';
import { District } from './District.entity';
import { Block } from './Block.entity';
import { Unit } from './Unit.entity';
import { Panchayat } from './Panchayat.entity';
import { Village } from './Village.entity';
import { Tola } from './Tola.entity';


@Entity('tbl_benificiary_masters')
export class Benificiary extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 25 })
  registration_id: string;

  @Column({ type: 'varchar', length: 20 })
  uid: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  father_name: string;

  @Column({ type: 'varchar', length: 50 })
  mother_name: string;

  @Column({type: 'int'})
  gender: number;

  @Column({ type: 'varchar', length: 50 })
  relation: string;

  @Column({ type: 'varchar', length: 70 })
  qualification: string;

  @Column({ type: 'varchar', length: 12 })
  mobile_number: string;

  @Column({type: 'date'})
  dob: Date;

  @Column({ type: 'varchar', length: 50 })
  caste: string;

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
  followup_cnt: number;
  
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
