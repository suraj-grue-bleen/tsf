import { BaseEntity } from 'src/utility/Base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Role } from './Role.entity';
import { Department } from './Department.entity';
import { State } from './State.entity';
import { District } from './District.entity';
import { Block } from './Block.entity';
import { Panchayat } from './Panchayat.entity';
import { Village } from './Village.entity';

@Entity('tbl_user_masters')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 25 })
  emp_id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 10 })
  phone: string;

  @Column({ type: 'varchar', length: 100 })
  address: string;

  @Column({ type: 'varchar', length: 150 })
  password: string;

  @Column()
  role_id: number;

  @Column()
  dept_id: number;

  @Column()
  state_id: number;

  @Column()
  district_id: number;

  @Column()
  block_id: number;

  @Column()
  panchayat_id: number;

  @Column()
  village_id: number;

  @Column()
  unit_id: number;

  @Column()
  created_by: number;

  @Column()
  updated_by: number;


  // Table Relations
  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Department)
  @JoinColumn({ name: 'dept_id' })
  department: Department;

  @ManyToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state: State;

  @ManyToOne(() => District)
  @JoinColumn({ name: 'district_id' })
  district: District;

  @ManyToOne(() => Block)
  @JoinColumn({ name: 'block_id' })
  block: Block;

  @ManyToOne(() => Panchayat)
  @JoinColumn({ name: 'panchayat_id' })
  panchayat: Panchayat;

  @ManyToOne(() => Village)
  @JoinColumn({ name: 'village_id' })
  village: Village;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  created_by_user: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: User;
}
