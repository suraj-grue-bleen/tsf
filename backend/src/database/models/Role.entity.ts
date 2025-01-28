import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';

@Entity('tbl_role_masters')
export class Role extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 25 })
  display_name: string;
}