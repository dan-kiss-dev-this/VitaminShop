using backend2.Models;
using backend2.Context;
using backend2.Interfaces;

namespace backend2.Repository
{
    public class PokemonRepository : IPokemonRepository
    {
        private readonly DataContext _context;
        // via dependency injection, the DataContext is passed to the constructor
        public PokemonRepository(DataContext dataContext)
        {
            _context = dataContext;
        }

        public Pokemon GetPokemon(int id)
        {
            return _context.Pokemon.Where(p => p.Id == id).FirstOrDefault();
        }

        public Pokemon GetPokemon(string name)
        {
            return _context.Pokemon.Where(p => p.Name == name).FirstOrDefault();
        }

        public decimal GetPokemonRating(int pokeId)
        {
            // how you get all the reviews for a specific Pokemon, note the nesting
            var review = _context.Reviews.Where(r => r.Pokemon.Id == pokeId);
            if(review.Count() == 0)
            {
                return 0;
            }
            // how we sum up the reviews using LINQ and divide by the count, note the casting to decimal
            return (decimal)review.Sum(r => r.Rating) / review.Count();
            
        }

        public ICollection<Pokemon> GetPokemons()
        {
            // this is how you can return the Pokemon table from the database in list format
            return _context.Pokemon.OrderBy(p => p.Id).ToList();
        }

        public bool PokemonExists(int pokeId)
        {
            return _context.Pokemon.Any(p => p.Id == pokeId);
        }

    }
}
