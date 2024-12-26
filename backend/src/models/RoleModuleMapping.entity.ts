import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RoleModule {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', length: 7 })
  module_id: number;

  @Column({ type: 'int', length: 7 })
  role_id: number;

  @Column({ type: 'int', length: 7 })
  user_id: number;

  @Column({ type: 'int', length: 7 })
  created_by: number;
  
  @Column({ type: 'int', length: 7 })
  updated_by: number;

  @Column({ type:'time'})
  created_at: Date;

  @Column({ type:'time'})
  updated_at: Date

}