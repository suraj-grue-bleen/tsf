import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';
export class ChildNutritionSurvey1738313215380 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_child_nutrition_survey',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'patient_name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'registration_id',
            type: 'varchar',
            isNullable: false,
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
            name: 'contact_number',
            type: 'int',
            length: '12',
            isNullable: true,
          },
          {
            name: 'age',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'caste',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'identified_date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'initial_screening_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'height',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'weight',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'skin_fold_thikness',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'head_circumference',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'chest_circumference',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'mention',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'referred_nrc',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'project_slug',
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
