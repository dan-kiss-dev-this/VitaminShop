using backend2.Context;
using backend2.Interfaces;
using backend2.Models;
using Microsoft.EntityFrameworkCore;

namespace backend2.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _dataContext;

        public CategoryRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public bool CategoryExists(int id)
        {
                return _dataContext.Categories.Any(c => c.Id == id);
        }

        public ICollection<Category> GetCategories()
        {
            return _dataContext.Categories.OrderBy(c => c.Id).ToList();
        }

        public Category GetCategory(int id)
        {
            try
            {
                var category = _dataContext.Categories.FirstOrDefault(c => c.Id == id);
                if (category == null)
                {
                    throw new KeyNotFoundException($"Category with id {id} not found.");
                }
                return category;
            }
            catch (Exception ex)
            {
                // Log the exception (logging mechanism not shown here)  
                throw new ApplicationException("An error occurred while retrieving the category.", ex);
            }
        }

        public ICollection<Pokemon> GetPokemonByCategory(int categoryId)
        {
            // to get nested values you can do Select() or Include()
            return _dataContext.PokemonCategories.Where(pc => pc.CategoryId == categoryId).Select(pc => pc.Pokemon).ToList();
        }
    }
}
