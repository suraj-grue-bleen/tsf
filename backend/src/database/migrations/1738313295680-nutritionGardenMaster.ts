import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Nrcmaster1738313274591 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_nutrition_garden_masters',
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
            name: 'date_of_identity',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '10',
            isNullable: true,
          },
          {
            name: 'father_name',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'husband_name',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'ref_reg_no',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'caste',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'total_family_member',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'adult',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'children',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'community_garden',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'cg_area',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'individual_garden',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'g_area',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
