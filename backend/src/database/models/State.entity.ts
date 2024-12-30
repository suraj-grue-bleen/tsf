import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { District } from './District.entity';

@Entity('tbl_state_masters')
export class State extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  state_name: string;

  @OneToMany(() => District, (district) => district.state) // One state can have many districts
  districts: District[];
}
