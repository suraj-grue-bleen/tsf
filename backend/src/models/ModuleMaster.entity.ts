import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  menu_name: string;

  @Column({ type: 'varchar', length: 50 })
  module_link: string;

  @Column({ type: 'int'})
  parent_id: string;

  @Column({ type: 'int' })
  type: number;

  @Column({ type: 'float' })
  menu_order: string;

  @Column({ type:'time'})
  created_at: Date

}