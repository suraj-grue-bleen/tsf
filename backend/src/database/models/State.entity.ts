import { BaseEntity } from 'src/utility/Base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './Employee.entity';
// import { District } from './District.entity';

@Entity('tbl_state_masters')
export class State extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  state_name: string;

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

  // @OneToMany(() => District, (district) => district.state) // One state can have many districts
  // districts: District[];
}
