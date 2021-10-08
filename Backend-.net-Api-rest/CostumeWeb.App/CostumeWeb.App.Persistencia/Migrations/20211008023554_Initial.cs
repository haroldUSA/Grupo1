using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CostumeWeb.App.Persistencia.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "categorys",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "VARCHAR(45)", maxLength: 45, nullable: false),
                    description = table.Column<string>(type: "VARCHAR(250)", maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_categorys", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "clients",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "VARCHAR(250)", maxLength: 250, nullable: false),
                    email = table.Column<string>(type: "VARCHAR(45)", maxLength: 45, nullable: false),
                    password = table.Column<string>(type: "VARCHAR(45)", maxLength: 45, nullable: false),
                    age = table.Column<int>(type: "INT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clients", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "messages",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    messagetext = table.Column<string>(type: "VARCHAR(250)", maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_messages", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "useradmins",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "VARCHAR(250)", maxLength: 250, nullable: false),
                    email = table.Column<string>(type: "VARCHAR(45)", maxLength: 45, nullable: false),
                    password = table.Column<string>(type: "VARCHAR(45)", maxLength: 45, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_useradmins", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "costumes",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    brand = table.Column<string>(type: "VARCHAR(45)", maxLength: 45, nullable: false),
                    model = table.Column<int>(type: "INT", nullable: false),
                    category_id = table.Column<int>(type: "INT", nullable: false),
                    name = table.Column<string>(type: "VARCHAR(45)", maxLength: 45, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_costumes", x => x.id);
                    table.ForeignKey(
                        name: "FK_costumes_categorys_category_id",
                        column: x => x.category_id,
                        principalTable: "categorys",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "reservations",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    client_id = table.Column<int>(type: "INT", nullable: false),
                    costume_id = table.Column<int>(type: "INT", nullable: false),
                    calification = table.Column<int>(type: "INT", nullable: false),
                    initialDate = table.Column<DateTime>(type: "DATE", maxLength: 250, nullable: false),
                    finalDate = table.Column<DateTime>(type: "DATE", maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_reservations", x => x.id);
                    table.ForeignKey(
                        name: "FK_reservations_clients_client_id",
                        column: x => x.client_id,
                        principalTable: "clients",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_reservations_costumes_costume_id",
                        column: x => x.costume_id,
                        principalTable: "costumes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "qualificationReservations",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    reservation_id = table.Column<int>(type: "INT", nullable: false),
                    reservationid = table.Column<int>(type: "int", nullable: true),
                    calification = table.Column<int>(type: "INT", nullable: false),
                    message = table.Column<string>(type: "VARCHAR(250)", maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_qualificationReservations", x => x.id);
                    table.ForeignKey(
                        name: "FK_qualificationReservations_reservations_reservationid",
                        column: x => x.reservationid,
                        principalTable: "reservations",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_costumes_category_id",
                table: "costumes",
                column: "category_id");

            migrationBuilder.CreateIndex(
                name: "IX_qualificationReservations_reservationid",
                table: "qualificationReservations",
                column: "reservationid");

            migrationBuilder.CreateIndex(
                name: "IX_reservations_client_id",
                table: "reservations",
                column: "client_id");

            migrationBuilder.CreateIndex(
                name: "IX_reservations_costume_id",
                table: "reservations",
                column: "costume_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "messages");

            migrationBuilder.DropTable(
                name: "qualificationReservations");

            migrationBuilder.DropTable(
                name: "useradmins");

            migrationBuilder.DropTable(
                name: "reservations");

            migrationBuilder.DropTable(
                name: "clients");

            migrationBuilder.DropTable(
                name: "costumes");

            migrationBuilder.DropTable(
                name: "categorys");
        }
    }
}
