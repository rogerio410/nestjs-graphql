import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddExpenseEntity1686510431983 implements MigrationInterface {
  name = 'AddExpenseEntity1686510431983';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."expense_status_enum" AS ENUM('0', '1')`,
    );
    await queryRunner.query(
      `CREATE TABLE "expense" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "amount" character varying NOT NULL, "status" "public"."expense_status_enum" NOT NULL DEFAULT '0', "ownerId" integer, CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ADD CONSTRAINT "FK_11fb900971ee7b9fbdf20b8dea0" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "expense" DROP CONSTRAINT "FK_11fb900971ee7b9fbdf20b8dea0"`,
    );
    await queryRunner.query(`DROP TABLE "expense"`);
    await queryRunner.query(`DROP TYPE "public"."expense_status_enum"`);
  }
}
