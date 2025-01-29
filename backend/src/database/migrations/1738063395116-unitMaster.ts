import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class UnitMaster1738063395116 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_unit_masters',
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
            name: 'unit_name',
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
      'tbl_unit_masters',
      new TableForeignKey({
        columnNames: ['state_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_state_masters',
        onDelete: 'CASCADE',
      }),
    );
    //district
    await queryRunner.createForeignKey(
      'tbl_unit_masters',
      new TableForeignKey({
        columnNames: ['district_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_district_masters',
        onDelete: 'CASCADE',
      }),
    );
    //block
    await queryRunner.createForeignKey(
      'tbl_unit_masters',
      new TableForeignKey({
        columnNames: ['block_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_block_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (created_by)
    await queryRunner.createForeignKey(
      'tbl_unit_masters',
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_employee_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (updated_by)
    await queryRunner.createForeignKey(
      'tbl_unit_masters',
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
