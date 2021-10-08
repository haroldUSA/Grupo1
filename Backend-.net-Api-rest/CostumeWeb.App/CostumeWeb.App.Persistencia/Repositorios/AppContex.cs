using Microsoft.EntityFrameworkCore;
using CostumeWeb.App.Dominio;

namespace CostumeWeb.App.Persistencia
{
    public class AppContext : DbContext
    {
        public DbSet<Client> clients { get; set; }
        public DbSet<Category> categorys { get; set; }
        public DbSet<Costume> costumes { get; set; }
        public DbSet<Message> messages { get; set; }
        public DbSet<QualificationReservation> qualificationReservations { get; set; }
        public DbSet<Reservation> reservations { get; set; }
        public DbSet<UserAdmin> useradmins { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            if (!optionBuilder.IsConfigured)
            {
                optionBuilder.UseSqlServer("Data Source = (localdb)\\MSSQLLocalDB; Initial Catalog = CostumeData");
            }


        }
    }
}