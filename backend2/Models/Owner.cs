namespace backend2.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gym { get; set; }
        // below is one to many relationship
        public Country Country { get; set; }
        public ICollection<PokemonOwner> PokemonOwners { get; set; }

    }
}
