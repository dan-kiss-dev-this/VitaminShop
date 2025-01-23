using backend2.Interfaces;
using backend2.Models;
using backend2.Repository;
using Microsoft.AspNetCore.Mvc;

namespace backend2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
        // note this class WIP
        private readonly ICountryRepository _countryRepository;

        public CountryController(ICountryRepository countryRepository)
        {
            _countryRepository = countryRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Country>> GetCountries()
        {
            var countries = _countryRepository.GetCountries();
            return Ok(countries);
        }

        [HttpGet("{id}")]
        public ActionResult<Country> GetCountry(int id)
        {
            var country = _countryRepository.GetCountry(id);
            if (country == null)
            {
                return NotFound();
            }
            return Ok(country);
        }

        [HttpGet("country/{ownerId}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Country))]
        [ProducesResponseType(400)]
        public IActionResult GetCountryByOwner(int ownerId)
        {
            var country = _countryRepository.GetCountryByOwner(ownerId);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(country);
        }

    }
}
