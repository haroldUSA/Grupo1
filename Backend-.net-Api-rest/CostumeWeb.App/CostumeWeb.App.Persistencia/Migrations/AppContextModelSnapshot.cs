﻿// <auto-generated />
using System;
using CostumeWeb.App.Persistencia;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CostumeWeb.App.Persistencia.Migrations
{
    [DbContext(typeof(AppContext))]
    partial class AppContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("CostumeWeb.App.Dominio.Category", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("description")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("VARCHAR(250)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("VARCHAR(45)");

                    b.HasKey("id");

                    b.ToTable("categorys");
                });

            modelBuilder.Entity("CostumeWeb.App.Dominio.Client", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("age")
                        .HasColumnType("INT");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("VARCHAR(45)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("VARCHAR(250)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("VARCHAR(45)");

                    b.HasKey("id");

                    b.ToTable("clients");
                });

            modelBuilder.Entity("CostumeWeb.App.Dominio.Costume", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("brand")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("VARCHAR(45)");

                    b.Property<int>("category_id")
                        .HasColumnType("INT");

                    b.Property<int>("model")
                        .HasColumnType("INT");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("VARCHAR(45)");

                    b.HasKey("id");

                    b.HasIndex("category_id");

                    b.ToTable("costumes");
                });

            modelBuilder.Entity("CostumeWeb.App.Dominio.Message", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("messagetext")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("VARCHAR(250)");

                    b.HasKey("id");

                    b.ToTable("messages");
                });

            modelBuilder.Entity("CostumeWeb.App.Dominio.QualificationReservation", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("calification")
                        .HasColumnType("INT");

                    b.Property<string>("message")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("VARCHAR(250)");

                    b.Property<int>("reservation_id")
                        .HasColumnType("INT");

                    b.Property<int?>("reservationid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("reservationid");

                    b.ToTable("qualificationReservations");
                });

            modelBuilder.Entity("CostumeWeb.App.Dominio.Reservation", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("calification")
                        .HasColumnType("INT");

                    b.Property<int>("client_id")
                        .HasColumnType("INT");

                    b.Property<int>("costume_id")
                        .HasColumnType("INT");

                    b.Property<DateTime>("finalDate")
                        .HasMaxLength(250)
                        .HasColumnType("DATE");

                    b.Property<DateTime>("initialDate")
                        .HasMaxLength(250)
                        .HasColumnType("DATE");

                    b.HasKey("id");

                    b.HasIndex("client_id");

                    b.HasIndex("costume_id");

                    b.ToTable("reservations");
                });

            modelBuilder.Entity("CostumeWeb.App.Dominio.UserAdmin", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("email")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("VARCHAR(45)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("VARCHAR(250)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("VARCHAR(45)");

                    b.HasKey("id");

                    b.ToTable("useradmins");
                });

            modelBuilder.Entity("CostumeWeb.App.Dominio.Costume", b =>
                {
                    b.HasOne("CostumeWeb.App.Dominio.Category", "category")
                        .WithMany()
                        .HasForeignKey("category_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("category");
                });

            modelBuilder.Entity("CostumeWeb.App.Dominio.QualificationReservation", b =>
                {
                    b.HasOne("CostumeWeb.App.Dominio.Reservation", "reservation")
                        .WithMany()
                        .HasForeignKey("reservationid");

                    b.Navigation("reservation");
                });

            modelBuilder.Entity("CostumeWeb.App.Dominio.Reservation", b =>
                {
                    b.HasOne("CostumeWeb.App.Dominio.Client", "client")
                        .WithMany()
                        .HasForeignKey("client_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CostumeWeb.App.Dominio.Costume", "costume")
                        .WithMany()
                        .HasForeignKey("costume_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("client");

                    b.Navigation("costume");
                });
#pragma warning restore 612, 618
        }
    }
}