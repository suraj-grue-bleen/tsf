import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  user_name: string;

  @Column({ type: 'varchar', length: 30 })
  empId: string;

  @Column({ type: 'int', length: 12 })
  mobile_no: number;

  // @Column({ type: 'varchar', length: 15 })
  // username: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'int', length: 3 }) //foreign key from department table
  department_id: number;

  @Column({ type: 'int', length: 2 })  //foreign key from 
  state_id: number;

  @Column({ type: 'int', length: 10 })  //foreign key from 
  district_id: number;

  @Column({ type: 'int', length: 12 })  //foreign key from 
  block_id: number;

  @Column({ type: 'int', length: 12 })  //foreign key from 
  panchayat_id: number;

  @Column({ type: 'int', length: 12 })  //foreign key from 
  village_id: number;

  @Column({ type: 'int', length: 12 })  //foreign key from 
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

}