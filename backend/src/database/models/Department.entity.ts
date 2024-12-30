import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';

@Entity('tbl_department_masters')
export class Department extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  state_name: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;
}
