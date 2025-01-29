import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { Employee } from './Employee.entity';
import { State } from './State.entity';
import { Block } from './Block.entity';

@Entity('tbl_district_masters')
export class District extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  state_id: number;

  @Column({ type: 'varchar', length: 100 })
  district_name: string;

  @Column()
  created_by: number;

  @Column()
  updated_by: number;

  // Table Relations
  @ManyToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state: State;
  
  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'created_by' })
  created_by_user: Employee;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: Employee;

  // @ManyToOne(() => State, (state) => state.districts) // Many districts can belong to one state
  // @JoinColumn({ name: 'state_id' }) // Foreign key column in the District table
  // state: State;

  // @OneToMany(() => Block, (block) => block.district) // One district can have many blocks
  // blocks: Block[];
}
