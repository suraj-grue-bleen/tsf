import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AnganbariSevikaMaster1737976831835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_anganbari_sevika_masters',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'anganbari_name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'anganbari_code',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'sevika_name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'sevika_phone_number',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'achivement_count',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'session',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'state_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'district_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'block_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'unit_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'panchayat_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'village_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'tola_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['1', '2'],
            enumName: 'status_enum',
            isNullable: true,
          },
          {
            name: 'created_by',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'updated_by',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );

    // State
    await queryRunner.createForeignKey(
      'tbl_anganbari_sevika_masters',
      new TableForeignKey({
        columnNames: ['state_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_state_masters',
        onDelete: 'CASCADE',
      }),
    );

    //District
    await queryRunner.createForeignKey(
      'tbl_anganbari_sevika_masters',
      new TableForeignKey({
        columnNames: ['district_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_district_masters',
        onDelete: 'CASCADE',
      }),
    );

    //Block
    await queryRunner.createForeignKey(
      'tbl_anganbari_sevika_masters',
      new TableForeignKey({
        columnNames: ['block_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_block_masters',
        onDelete: 'CASCADE',
      }),
    );

    //Unit
    await queryRunner.createForeignKey(
      'tbl_anganbari_sevika_masters',
      new TableForeignKey({
        columnNames: ['unit_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_block_unit_masters',
        onDelete: 'CASCADE',
      }),
    );

    //Panchayat
    await queryRunner.createForeignKey(
      'tbl_anganbari_sevika_masters',
      new TableForeignKey({
        columnNames: ['panchayat_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_panchayat_masters',
        onDelete: 'CASCADE',
      }),
    );

    //Village
    await queryRunner.createForeignKey(
      'tbl_anganbari_sevika_masters',
      new TableForeignKey({
        columnNames: ['village_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_village_masters',
        onDelete: 'CASCADE',
      }),
    );

    //tola
    await queryRunner.createForeignKey(
      'tbl_anganbari_sevika_masters',
      new TableForeignKey({
        columnNames: ['tola_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_village_tola_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (created_by)
    await queryRunner.createForeignKey(
      'tbl_anganbari_sevika_masters',
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_employee_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (updated_by)
    await queryRunner.createForeignKey(
      'tbl_anganbari_sevika_masters',
      new TableForeignKey({
        columnNames: ['updated_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_employee_masters',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
