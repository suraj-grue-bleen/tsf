import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/utility/Base.entity';
import { Panchayat } from './Panchayat.entity';

@Entity('tbl_village_masters')
export class Village extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  village_name: string;

  @Column({ type: 'int' })
  panchayat_id: number;

  @ManyToOne(() => Panchayat, (panchayat) => panchayat.villages) // Many villages can belong to one panchayat
  @JoinColumn({ name: 'panchayat_id' }) // Foreign key column in the Village table
  panchayat: Panchayat;
}
