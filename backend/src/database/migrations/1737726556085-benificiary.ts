import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Benificiary1737726556085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_benificiary_masters',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'registration_id',
            type: 'varchar',
          },
          {
            name: 'uid',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'father_name',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'mother_name',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'gender',
            type: 'enum',
            enum: ['1', '2', '3'],
            enumName: 'gender_enum',
            isNullable: true,
          },
          {
            name: 'relation',
            type: 'varchar',
            length: '40',
            isNullable: true,
          },
          {
            name: 'qualification',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'mobile_number',
            type: 'varchar',
            length: '12',
            isNullable: false,
          },
          {
            name: 'dob',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'caste',
            type: 'enum',
            enum: ['1', '2', '3'],
            enumName: 'caste_enum',
            isNullable: true,
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
            name: 'followup_cnt',
            type: 'varchar',
            length: '50',
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
      'tbl_benificiary_masters',
      new TableForeignKey({
        columnNames: ['state_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_state_masters',
        onDelete: 'CASCADE',
      }),
    );

    //District
    await queryRunner.createForeignKey(
      'tbl_benificiary_masters',
      new TableForeignKey({
        columnNames: ['district_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_district_masters',
        onDelete: 'CASCADE',
      }),
    );

    //Block
    await queryRunner.createForeignKey(
      'tbl_benificiary_masters',
      new TableForeignKey({
        columnNames: ['block_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_block_masters',
        onDelete: 'CASCADE',
      }),
    );

    //Unit
    await queryRunner.createForeignKey(
      'tbl_benificiary_masters',
      new TableForeignKey({
        columnNames: ['unit_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_unit_masters',
        onDelete: 'CASCADE',
      }),
    );

    //Panchayat
    await queryRunner.createForeignKey(
      'tbl_benificiary_masters',
      new TableForeignKey({
        columnNames: ['panchayat_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_panchayat_masters',
        onDelete: 'CASCADE',
      }),
    );

    //Village
    await queryRunner.createForeignKey(
      'tbl_benificiary_masters',
      new TableForeignKey({
        columnNames: ['village_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_village_masters',
        onDelete: 'CASCADE',
      }),
    );

    //tola
    await queryRunner.createForeignKey(
      'tbl_benificiary_masters',
      new TableForeignKey({
        columnNames: ['tola_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_tola_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (created_by)
    await queryRunner.createForeignKey(
      'tbl_benificiary_masters',
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_employee_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (updated_by)
    await queryRunner.createForeignKey(
      'tbl_benificiary_masters',
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
