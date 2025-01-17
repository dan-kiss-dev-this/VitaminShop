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
        public DbSet<Category> Categories { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Pokemon> Pokemon { get; set; }
        public DbSet<PokemonCategory> PokemonCategories { get; set; }
        public DbSet<PokemonOwner> PokemonOwners { get; set; }
        public DbSet<Referral> Referrals { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Reviewer> Reviewers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id); //Set id as the primary key
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
            });

            // how we customize table on creating a many to many relationship, below is how you link the PokemonId and CategoryId
            modelBuilder.Entity<PokemonCategory>()
                .HasKey(pc => new { pc.PokemonId, pc.CategoryId });
            modelBuilder.Entity<PokemonCategory>()
                .HasOne(p => p.Pokemon)
                .WithMany(pc => pc.PokemonCategories)
                .HasForeignKey(c => c.PokemonId);
            modelBuilder.Entity<PokemonCategory>()
                .HasOne(p => p.Category)
                .WithMany(pc => pc.PokemonCategories)
                .HasForeignKey(c => c.CategoryId);

            modelBuilder.Entity<PokemonOwner>()
                .HasKey(po => new { po.PokemonId, po.OwnerId });
            modelBuilder.Entity<PokemonOwner>()
                .HasOne(p => p.Pokemon)
                .WithMany(pc => pc.PokemonOwners)
                .HasForeignKey(c => c.PokemonId);
            modelBuilder.Entity<PokemonOwner>()
                .HasOne(p => p.Owner)
                .WithMany(pc => pc.PokemonOwners)
                .HasForeignKey(c => c.OwnerId);



            //    modelBuilder.Entity<PokemonOwner>()
            //        .HasKey(pc => new { pc.PokemonId, pc.OwnerId });
            //}
        }
    }
}
