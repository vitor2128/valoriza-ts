import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddValue1624895372965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "value",
                type: "number",
                default: 0
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password")
    }

}
