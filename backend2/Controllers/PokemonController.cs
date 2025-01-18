using backend2.Interfaces;
using backend2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.CodeDom;

namespace backend2.Controllers
{
    // these data attributes above are need to define the controller
    [Route("api/[controller]")]
    [ApiController]
    public class PokemonController : Controller
    {
        public readonly IPokemonRepository _pokemonRepository;
        public PokemonController(IPokemonRepository pokemonRepository)
        {
            this._pokemonRepository = pokemonRepository;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Pokemon>))]
        public IActionResult GetPokemons()
        {
            var pokemons = _pokemonRepository.GetPokemons();
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(pokemons);
        }
    }
}
