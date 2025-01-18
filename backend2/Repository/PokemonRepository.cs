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
        public ICollection<Pokemon> GetPokemons()
        {
            // this is how you can return the Pokemon table from the database in list format
            return _context.Pokemon.OrderBy(p => p.Id).ToList();
        }
    }
}
