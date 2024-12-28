import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';
import { ModuleMaster } from './ModuleMaster.entity';

@Entity()
export class RoleModule {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  module_id: number;

  @Column({ type: 'int'})
  role_id: number;

  @Column({ type: 'int' })
  user_id: number;

  @Column({ type: 'int' })
  created_by: number;
  
  @Column({ type: 'int'})
  updated_by: number;

  @Column({ type:'time'})
  created_at: Date;

  @Column({ type:'time'})
  updated_at: Date;

  // Many role-module mappings can belong to one user
  @ManyToOne(() => User, (user) => user.roleModules)
  user: User;

  // Many role-module mappings can belong to one module
  @ManyToOne(() => ModuleMaster, { nullable: false })
  module: ModuleMaster;

}