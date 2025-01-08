namespace backend.Models
{
    public class User
    {
        public int Id { get; }
        public string Email { get; set; }
        public string? Name { get; set; }
        public string? Password { get; set; }

        public User(string email, string? name = null, string? password = null)
        {
            // check that the id was made
            //Id = Guid.NewGuid();
            Email = email;
            Name = name;
            Password = password;
        }
    } 
}

