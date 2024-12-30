import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { District } from './District.entity';
import { Panchayat } from './Panchayat.entity';

@Entity('tbl_block_masters')
export class Block extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  block_name: string;

  @Column({ type: 'int' })
  district_id: number;

  @ManyToOne(() => District, (district) => district.blocks) // Many blocks can belong to one state
  @JoinColumn({ name: 'district_id' }) // Foreign key column in the block table
  district: District;

  @OneToMany(() => Panchayat, (panchayat) => panchayat.block) // One Block can have many panchayat
  panchayats: Panchayat[];
}
