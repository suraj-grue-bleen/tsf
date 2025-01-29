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

@Entity('tbl_block_masters')
export class Block extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  state_id: number;

  @Column({ type: 'int' })
  district_id: number;

  @Column({ type: 'varchar', length: 50 })
  block_name: string;

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

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'created_by' })
  created_by_user: Employee;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: Employee;
  
  // @ManyToOne(() => District, (district) => district.blocks) // Many blocks can belong to one state
  // @JoinColumn({ name: 'district_id' }) // Foreign key column in the block table
  // district: District;

  // @OneToMany(() => Panchayat, (panchayat) => panchayat.block) // One Block can have many panchayat
  // panchayats: Panchayat[];
}
