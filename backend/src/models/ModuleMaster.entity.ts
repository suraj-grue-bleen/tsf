import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ModuleMaster {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  menu_name: string;

  @Column({ type: 'varchar', length: 50 })
  module_link: string;

  @Column({ type: 'int'})
  parent_id: number;

  @Column({ type: 'int' })
  type: number;

  @Column({ type: 'float' })
  menu_order: number;

  @Column({ type:'time'})
  created_at: Date;

   // Many modules can belong to one parent module
   @ManyToOne(() => ModuleMaster, (module) => module.childModules, { nullable: true })
   parentModule: ModuleMaster;
 
   // One module can have multiple child modules
   @OneToMany(() => ModuleMaster, (module) => module.parentModule)
   childModules: ModuleMaster[];
}