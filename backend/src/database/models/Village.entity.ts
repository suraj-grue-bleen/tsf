import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { Employee } from './Employee.entity';
import { State } from './State.entity';
import { District } from './District.entity';
import { Block } from './Block.entity';
import { Unit } from './Unit.entity';
import { Panchayat } from './Panchayat.entity';

@Entity('tbl_village_masters')
export class Village extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int'})
  state_id: number;

  @Column({type: 'int'})
  district_id: number;

  @Column({ type: 'int' })
  block_id: number;

  @Column({ type: 'int' })
  unit_id: number;

  @Column({ type: 'int' })
  panchayat_id: number;

  @Column({ type: 'varchar', length: 50 })
  village_name: string;

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
 
  // @ManyToOne(() => Panchayat, (panchayat) => panchayat.villages) // Many villages can belong to one panchayat
  // @JoinColumn({ name: 'panchayat_id' }) // Foreign key column in the Village table
  // panchayat: Panchayat;
}
