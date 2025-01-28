import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AuditLog1735498659076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_audit_logs',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'user',
            type: 'json',
            isNullable: true,
          },
          {
            name: 'ip',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'method',
            type: 'varchar',
            length: '10',
            isNullable: false,
          },
          {
            name: 'payload',
            type: 'json',
          },
          {
            name: 'actions',
            type: 'json',
          },
          {
            name: 'start_time',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'end_time',
            type: 'timestamp',
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
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
