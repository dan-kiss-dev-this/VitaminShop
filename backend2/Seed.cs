using backend2.Context;
using backend2.Models;
using Microsoft.EntityFrameworkCore;

namespace backend2
{
    public class Seed
    {
        private readonly DataContext dataContext;
        public Seed(DataContext context)
        {
            this.dataContext = context;
            //    // if users do not seed
            //    if (await context.Users.AnyAsync()) return;

            //    var users = new List<User>
            //    {
            //        new User("exampleUser1@test.com", "Bobby Bobson", "pass123"),
            //    };

            //    await context.Users.AddRangeAsync(users);
            //    await context.SaveChangesAsync();
        }
        public void SeedDataContext()
        {
            if(!dataContext.Users.Any())
            {
                var users = new List<User>
                {
                    new User("exampleUser1@test.com", "Bobby Bobson", "pass123"),
                };
                dataContext.Users.AddRange(users);
                dataContext.SaveChanges();
            }
        }
    }
}
