using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly string _connectionString = "Server=danwindows;Database=VitaminShop;User Id=sa;Password=secretpassword123;TrustServerCertificate=True;";

        // POST: api/Users
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User data is null.");
            }

            // Insert user data into SQL Server
            using (var connection = new SqlConnection(_connectionString))
            {
                try
                {
                    await connection.OpenAsync();

                    var query = "INSERT INTO Users (Id, Name, Email, Password) VALUES (@Id, @Name, @Email, @Password)";
                    using (var command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@Id", user.Id);
                        command.Parameters.AddWithValue("@Name", user.Name);
                        command.Parameters.AddWithValue("@Email", user.Email);
                        command.Parameters.AddWithValue("@Password", user.Password);

                        int result = await command.ExecuteNonQueryAsync();

                        if (result > 0)
                        {
                            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
                        }
                        else
                        {
                            return StatusCode(500, "Internal server error");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Internal server error: {ex.Message}");
                }
            }
        }

        // Example GET method (if needed to fetch a user)
        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            // Logic to get the user by Id (not shown here)
            return Ok();
        }
    }
}
