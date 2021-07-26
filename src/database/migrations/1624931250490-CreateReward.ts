import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateReward1624931250490 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "reward",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_receiver",
                        type: "uuid",
                    },
                    {
                        name: "award_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUserReceiverReward",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKAwards",
                        referencedTableName: "awards",
                        referencedColumnNames: ["id"],
                        columnNames: ["award_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("reward")
    }

}
