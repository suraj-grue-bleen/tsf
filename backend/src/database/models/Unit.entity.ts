import { BaseEntity } from 'src/utility/Base.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { State } from './State.entity';
import { District } from './District.entity';
import { Block } from './Block.entity';
import { Employee } from './Employee.entity';

@Entity('tbl_unit_masters')
export class Unit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state_id: number;

  @Column()
  district_id: number;

  @Column()
  block_id: number;

  @Column({ type: 'varchar', length: 100 })
  unit_name: string;

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

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'created_by' })
  created_by_user: Employee;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: Employee;
}
