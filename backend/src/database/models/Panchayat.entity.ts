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


@Entity('tbl_panchayat_masters')
export class Panchayat extends BaseEntity {
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

  @Column({ type: 'varchar', length: 100 })
  panchayat_name: string;

  @Column()
  created_by: number;

  @Column()
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

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'created_by' })
  created_by_user: Employee;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: Employee;

  // @ManyToOne(() => Block, (block) => block.panchayats) // Many panchayats can belong to one block
  // @JoinColumn({ name: 'block_id' }) // Foreign key column in the Panchayat table
  // block: Block;

  // @OneToMany(() => Village, (village) => village.panchayat) // One Panchayat can have many villages
  // villages: Village[];
}
