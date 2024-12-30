import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { State } from './State.entity';
import { Block } from './Block.entity';

@Entity('tbl_district_masters')
export class District extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  district_name: string;

  @Column({ type: 'int' })
  state_id: number;

  @ManyToOne(() => State, (state) => state.districts) // Many districts can belong to one state
  @JoinColumn({ name: 'state_id' }) // Foreign key column in the District table
  state: State;

  @OneToMany(() => Block, (block) => block.district) // One district can have many blocks
  blocks: Block[];
}
