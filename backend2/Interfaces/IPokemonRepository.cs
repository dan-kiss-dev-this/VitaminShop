using backend2.Models;

namespace backend2.Interfaces
{
    public interface IPokemonRepository
    {
        //Pokemon GetPokemon(int id);
        ICollection<Pokemon> GetPokemons();
    }
}
