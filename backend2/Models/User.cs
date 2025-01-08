namespace backend2.Models
{
    public class User
    {
        public int Id { get; }
        public string Email { get; set; }
        public string? Name { get; set; }
        public string? Password { get; set; }

        public User(string email, string? name = null, string? password = null)
        {
            // Id is set with OnModelCreating in DataContext.cs
            Email = email;
            Name = name;
            Password = password;
        }
    }
}


