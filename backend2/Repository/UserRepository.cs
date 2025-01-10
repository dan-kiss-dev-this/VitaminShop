using backend2.Context;
using backend2.Interfaces;
using backend2.Models;

namespace backend2.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public ICollection<User> GetUsers()
        {
            return _context.Users.OrderBy(p => p.Id).ToList();
        }

        public User GetUser(int id)
        {
            try
            {
                var User = _context.Users.FirstOrDefault(user => user.Id == id);
                if (User == null)
                {
                    throw new KeyNotFoundException($"User with {id} not found");
                }
                return User;

            }
            catch(Exception e)
            {
                throw new Exception("An error occured", e);
            }
        }

        public User GetUser(string email)
        {
            try
            {
                var user = _context.Users.FirstOrDefault(user => user.Email == email);
                if (user == null)
                {
                    throw new KeyNotFoundException($"User with email {email} not found");
                }
                return user;
            }
            catch (Exception e)
            {
                throw new Exception("An error occurred", e);
            }
        }
    }
}
