import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeExpenseAmountType1686511719580
  implements MigrationInterface
{
  name = 'ChangeExpenseAmountType1686511719580';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "amount"`);
    await queryRunner.query(
      `ALTER TABLE "expense" ADD "amount" numeric(6,2) NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "amount"`);
    await queryRunner.query(
      `ALTER TABLE "expense" ADD "amount" character varying NOT NULL`,
    );
  }
}
