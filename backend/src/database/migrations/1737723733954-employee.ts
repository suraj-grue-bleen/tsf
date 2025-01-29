import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AppUsers1737723733954 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_employee_masters',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'employee_code',
            type: 'varchar',
            length: '25',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'employee_name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          // {
          //   name: 'email',
          //   type: 'varchar',
          //   length: '100',
          // },
          {
            name: 'password',
            type: 'varchar',
            length: '150',
          },
          {
            name: 'otp',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'mobile_number',
            type: 'varchar',
            length: '12',
            isNullable: true,
          },
          {
            name: 'department_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'role_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            length: '100',
          },
          // {
          //   name: 'state_id',
          //   type: 'int',
          //   isNullable: true,
          // },
          // {
          //   name: 'district_id',
          //   type: 'int',
          //   isNullable: true,
          // },
          // {
          //   name: 'block_id',
          //   type: 'int',
          //   isNullable: true,
          // },
          // {
          //   name: 'unit_id',
          //   type: 'int',
          //   isNullable: true,
          // },
          // {
          //   name: 'panchayat_id',
          //   type: 'int',
          //   isNullable: true,
          // },
          // {
          //   name: 'village_id',
          //   type: 'int',
          //   isNullable: true,
          // },
          // {
          //   name: 'tola_id',
          //   type: 'int',
          //   isNullable: true,
          // },
          {
            name: 'gender',
            type: 'enum',
            enum: ['1', '2', '3'],
            enumName: 'gender_enum',
            isNullable: true,
          },
          {
            name: 'team_member_no',
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

    // Role
    await queryRunner.createForeignKey(
      'tbl_employee_masters',
      new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_role_masters',
        onDelete: 'CASCADE',
      }),
    );

    // Department
    await queryRunner.createForeignKey(
      'tbl_employee_masters',
      new TableForeignKey({
        columnNames: ['dept_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_department_masters',
        onDelete: 'CASCADE',
      }),
    );

    // // State
    // await queryRunner.createForeignKey(
    //   'tbl_employee_masters',
    //   new TableForeignKey({
    //     columnNames: ['state_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'tbl_state_masters',
    //     onDelete: 'CASCADE',
    //   }),
    // );

    // //District
    // await queryRunner.createForeignKey(
    //   'tbl_employee_masters',
    //   new TableForeignKey({
    //     columnNames: ['district_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'tbl_district_masters',
    //     onDelete: 'CASCADE',
    //   }),
    // );

    // //Block
    // await queryRunner.createForeignKey(
    //   'tbl_employee_masters',
    //   new TableForeignKey({
    //     columnNames: ['block_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'tbl_block_masters',
    //     onDelete: 'CASCADE',
    //   }),
    // );

    // //Unit
    // await queryRunner.createForeignKey(
    //   'tbl_employee_masters',
    //   new TableForeignKey({
    //     columnNames: ['unit_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'tbl_unit_masters',
    //     onDelete: 'CASCADE',
    //   }),
    // );

    // //Panchayat
    // await queryRunner.createForeignKey(
    //   'tbl_employee_masters',
    //   new TableForeignKey({
    //     columnNames: ['panchayat_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'tbl_panchayat_masters',
    //     onDelete: 'CASCADE',
    //   }),
    // );

    // //Village
    // await queryRunner.createForeignKey(
    //   'tbl_employee_masters',
    //   new TableForeignKey({
    //     columnNames: ['village_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'tbl_village_masters',
    //     onDelete: 'CASCADE',
    //   }),
    // );

    // //tola
    // await queryRunner.createForeignKey(
    //   'tbl_employee_masters',
    //   new TableForeignKey({
    //     columnNames: ['tola_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'tbl_tola_masters',
    //     onDelete: 'CASCADE',
    //   }),
    // );

    //User (created_by)
    await queryRunner.createForeignKey(
      'tbl_employee_masters',
      new TableForeignKey({
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_employee_masters',
        onDelete: 'CASCADE',
      }),
    );

    //User (updated_by)
    await queryRunner.createForeignKey(
      'tbl_employee_masters',
      new TableForeignKey({
        columnNames: ['updated_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbl_employee_masters',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.query(
      `COMMENT ON COLUMN tbl_app_users.gender IS '1: Male, 2: Female, 3: Others'`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN tbl_app_users.status IS '1: Active, 2: Inactive'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE tbl_app_users`);
    await queryRunner.query(`DROP TYPE gender_enum`);
    await queryRunner.query(`DROP TYPE status_enum`);
  }
}
