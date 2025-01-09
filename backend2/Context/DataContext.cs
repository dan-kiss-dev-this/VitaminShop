using Microsoft.EntityFrameworkCore;
using backend2.Models;

namespace backend2.Context
{
    public class DataContext : DbContext
    {
        // note base calls the base class constructor
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        // you add in the models based on what is in the database
        public DbSet<User> Users { get; set; }
        //To add countries and associate users to them use the Country DbSet below
        //public DbSet<Country> Countries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id); // Set Id as the primary key
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
            });
        }
    }
}
