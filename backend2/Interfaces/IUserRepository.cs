﻿using backend2.Models;

namespace backend2.Interfaces
{
    public interface IUserRepository
    {
        ICollection<User> GetUsers();
    }
}
