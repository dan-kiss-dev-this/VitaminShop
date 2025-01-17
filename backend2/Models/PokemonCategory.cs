namespace backend2.Models
{
    public class PokemonCategory
    {
        // this is a join table for a many to many relationship
        public int PokemonId { get; set; }
        public int CategoryId { get; set; }
        public Pokemon Pokemon { get; set; }
        public Category Category { get; set; }
    }
}
