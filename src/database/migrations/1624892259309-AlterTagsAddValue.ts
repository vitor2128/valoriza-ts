import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTagsAddValue1624892259309 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "tags",
            new TableColumn({
                name: "value",
                type: "number",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tags", "value")
    }

}
