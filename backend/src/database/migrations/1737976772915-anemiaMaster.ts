import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AnemiaMaster1737976772915 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_anemia_masters',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'screening_cat_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'no_anemia',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'mild_anemia',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'moderate_anemia',
            type: 'varchar',
            length: '50',
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

    //Screening Category (screening_cat_Id)
    await queryRunner.createForeignKey(
      'tbl_anemia_masters',
      new TableForeignKey({
        columnNames: ['screening_cat_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_screening_category',
        onDelete: 'CASCADE',
      }),
    );

    //User (created_by)
    await queryRunner.createForeignKey(
      'tbl_anemia_masters',
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_employee_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (updated_by)
    await queryRunner.createForeignKey(
      'tbl_anemia_masters',
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
