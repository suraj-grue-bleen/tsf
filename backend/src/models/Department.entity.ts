import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  department_name: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

}