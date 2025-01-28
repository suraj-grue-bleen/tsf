import { BaseEntity } from 'src/utility/Base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ModuleMaster extends BaseEntity {

  @Column({ type: 'varchar', length: 60 })
  menu_name: string;

  @Column({ type: 'varchar', length: 50 })
  module_link: string;

  @Column()
  parent_id: string;

  //Comment Sub-Menu,
  @Column()
  type: number;

  @Column({ type: 'float' })
  menu_order: string;

  @Column()
  created_by: number;

  @Column()
  updated_by: number;

}