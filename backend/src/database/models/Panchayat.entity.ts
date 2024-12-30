import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { Block } from './Block.entity';
import { Village } from './Village.entity';

@Entity('tbl_panchayat_masters')
export class Panchayat extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  panchayat_name: string;

  @Column({ type: 'int' })
  block_id: number;

  @ManyToOne(() => Block, (block) => block.panchayats) // Many panchayats can belong to one block
  @JoinColumn({ name: 'block_id' }) // Foreign key column in the Panchayat table
  block: Block;

  @OneToMany(() => Village, (village) => village.panchayat) // One Panchayat can have many villages
  villages: Village[];
}
