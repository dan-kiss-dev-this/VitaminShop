using AutoMapper;
using backend2.DTO;
using backend2.Models;

namespace backend2.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<User, UserDto>();
            CreateMap<Pokemon, PokemonDto>();
            CreateMap<Category, CategoryDto>();

            // to create pokemon via http post
            CreateMap<PokemonDto, Pokemon>();
        }
    }
}
