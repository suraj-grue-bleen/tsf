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
        name: 'tbl_nrc_masters',
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
            name: 'identified_date',
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
            name: 'gender',
            type: 'enum',
            enum: ['1', '2', '3'],
            enumName: 'gender_enum',
            isNullable: true,
          },
          {
            name: 'dob',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'age',
            type: 'int',
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
            name: 'panchayat_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'referred_date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'weight_in_idenf',
            type: 'varchar',
            length: '40',
            isNullable: true,
          },
          { 
            name: 'returning_weight',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'height_in_idenf',
            type: 'varchar',
            length: '12',
            isNullable: false,
          },
          {
            name: 'returning_height',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'returning_date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'nf',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'followup_no',
            //type: 'varchar',
            //length: '50',
            type:'enum',
            enum: ['1', '2', '3', '4', '5'],
            isNullable: true,
          },
          
        //   {
        //     name: 'followup_cnt',
        //     type: 'varchar',
        //     length: '50',
        //     isNullable: true,
        //   },
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
