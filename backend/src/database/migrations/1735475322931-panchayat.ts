import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Panchayat1735475322931 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_panchayat_masters',
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
            name: 'panchayat_name',
            type: 'varchar',
            length: '100',
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
      'tbl_panchayat_masters',
      new TableForeignKey({
        columnNames: ['state_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_state_masters',
        onDelete: 'CASCADE',
      }),
    );
    //district
    await queryRunner.createForeignKey(
      'tbl_panchayat_masters',
      new TableForeignKey({
        columnNames: ['district_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_district_masters',
        onDelete: 'CASCADE',
      }),
    );
    //block
    await queryRunner.createForeignKey(
      'tbl_panchayat_masters',
      new TableForeignKey({
        columnNames: ['block_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_block_masters',
        onDelete: 'CASCADE',
      }),
    );
    //unit
    await queryRunner.createForeignKey(
      'tbl_panchayat_masters',
      new TableForeignKey({
        columnNames: ['unit_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_unit_masters',
        onDelete: 'CASCADE',
      }),
    );
    //User (created_by)
    await queryRunner.createForeignKey(
      'tbl_panchayat_masters',
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_employee_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (updated_by)
    await queryRunner.createForeignKey(
      'tbl_panchayat_masters',
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
