import { BaseEntity } from 'src/utility/Base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './Role.entity';
import { Department } from './Department.entity';
// import { State } from './State.entity';
// import { District } from './District.entity';
// import { Block } from './Block.entity';
// import { Unit } from './Unit.entity';
// import { Panchayat } from './Panchayat.entity';
// import { Village } from './Village.entity';
// import { Tola } from './Tola.entity';

@Entity('tbl_employee_masters')
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 25 })
  emplyee_code: string;

  @Column({ type: 'varchar', length: 50 })
  employee_name: string;

  // @Column({ type: 'varchar', length: 50 })
  // email: string;

  @Column({ type: 'varchar', length: 50 })
  password: string;

  @Column({ type: 'varchar', length: 10 })
  otp: string;

  @Column({ type: 'varchar', length: 10 })
  mobile_number: string;

  @Column({type: 'int'})
  department_id: number;

  @Column({type: 'int'})
  role_id: number;

  @Column({ type: 'varchar', length: 100 })
  address: string;

  // @Column({type: 'int'})
  // state_id: number;

  // @Column({type: 'int'})
  // district_id: number;

  // @Column({type: 'int'})
  // block_id: number;

  // @Column({type: 'int'})
  // unit_id: number;

  // @Column({type: 'int'})
  // panchayat_id: number;

  // @Column({type: 'int'})
  // village_id: number;

  // @Column({type: 'int'})
  // tola_id: number;

  @Column({type: 'int'})
  gender: number;

  @Column({type: 'int'})
  team_member_no: number;   //1 to 41 

  @Column({type: 'int'})
  status: number;
 
  @Column({type: 'int'})
  created_by: number;

  @Column({type: 'int'})
  updated_by: number;

  // Table Relations
  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Department)
  @JoinColumn({ name: 'dept_id' })
  department: Department;

  // @ManyToOne(() => State)
  // @JoinColumn({ name: 'state_id' })
  // state: State;

  // @ManyToOne(() => District)
  // @JoinColumn({ name: 'district_id' })
  // district: District;

  // @ManyToOne(() => Block)
  // @JoinColumn({ name: 'block_id' })
  // block: Block;

  // @ManyToOne(() => Unit)
  // @JoinColumn({ name: 'unit_id' })
  // unit: Unit;

  // @ManyToOne(() => Panchayat)
  // @JoinColumn({ name: 'panchayat_id' })
  // panchayat: Panchayat;

  // @ManyToOne(() => Village)
  // @JoinColumn({ name: 'village_id' })
  // village: Village;

  // @ManyToOne(() => Tola)
  // @JoinColumn({ name: 'tola_id' })
  // tola: Tola;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'created_by' })
  created_by_user: Employee;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: Employee;
}
