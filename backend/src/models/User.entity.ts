import { Column, Entity, ManyToOne, OneToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Department } from './Department.entity';
import { Role } from './Role.entity';
import { Otp } from './Otp.entity'; 
import { AuditLogs } from './AuditLogs.entity';
import { RoleModule } from './RoleModuleMapping.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  user_name: string;

  @Column({ type: 'varchar', length: 30 })
  empId: string;

  @Column({ type: 'int', width: 12 })
  mobile_no: number;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  // @ManyToOne(() => Department, (department) => department.users)
  // @JoinColumn({ name: 'department_id' })
  // department: Department;

  // @ManyToOne(() => Role, (role) => role.users)
  // @JoinColumn({ name: 'role_id' })
  // role: Role;

  @Column({ type: 'int' })
  department_id: number;

  @Column({ type: 'int' })
  role_id: number;

  @Column({ type: 'int' })
  state_id: number;

  @Column({ type: 'int' })
  district_id: number;

  @Column({ type: 'int' })
  block_id: number;

  @Column({ type: 'int' })
  panchayat_id: number;

  @Column({ type: 'int' })
  village_id: number;

  @Column({ type: 'int' })
  unit_id: number;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: ['M', 'F', 'O'] })
    /**
   * M - male
   * F - female
   * U - unspecified/Other
   */
  gender: string;

  @ManyToOne(() => Department, (department) => department.users)
  department: Department;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToOne(() => Otp, (otp) => otp.user, { cascade: true })
  otp: Otp;

  @OneToMany(() => AuditLogs, (auditLogs) => auditLogs.user)
  auditLogs: AuditLogs[];

   //One user can have multiple role-module mappings
   @OneToMany(() => RoleModule, (roleModule) => roleModule.user)
   roleModules: RoleModule[];
}