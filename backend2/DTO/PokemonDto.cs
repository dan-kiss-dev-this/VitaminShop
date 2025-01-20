namespace backend2.DTO
{
    public class PokemonDto
    {
        // DTO is data transfer object, used so you can send only specific data to the client so if there was say review data associated with the Pokemon you don't want to send, the DTO only not include that and you would have better security by doing that.
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
