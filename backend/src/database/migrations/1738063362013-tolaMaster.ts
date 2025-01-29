import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class TolaMaster1738063362013 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_tola_masters',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'state_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'district_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'block_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'unit_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'panchayat_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'village_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'tola_name',
            type: 'varchar',
            length: '50',
            isNullable: false,
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

    //state
    await queryRunner.createForeignKey(
      'tbl_tola_masters',
      new TableForeignKey({
        columnNames: ['state_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_state_masters',
        onDelete: 'CASCADE',
      }),
    );
    //district
    await queryRunner.createForeignKey(
      'tbl_tola_masters',
      new TableForeignKey({
        columnNames: ['district_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_district_masters',
        onDelete: 'CASCADE',
      }),
    );
    //block
    await queryRunner.createForeignKey(
      'tbl_tola_masters',
      new TableForeignKey({
        columnNames: ['block_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_block_masters',
        onDelete: 'CASCADE',
      }),
    );
    //unit
    await queryRunner.createForeignKey(
      'tbl_tola_masters',
      new TableForeignKey({
        columnNames: ['unit_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_unit_masters',
        onDelete: 'CASCADE',
      }),
    );

    //panchayat
    await queryRunner.createForeignKey(
      'tbl_tola_masters',
      new TableForeignKey({
        columnNames: ['panchayat_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_panchayat_masters',
        onDelete: 'CASCADE',
      }),
    );
    //village
    await queryRunner.createForeignKey(
      'tbl_tola_masters',
      new TableForeignKey({
        columnNames: ['village_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_village_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (created_by)
    await queryRunner.createForeignKey(
      'tbl_tola_masters',
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_employee_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (updated_by)
    await queryRunner.createForeignKey(
      'tbl_tola_masters',
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
