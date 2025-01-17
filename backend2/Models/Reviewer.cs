namespace backend2.Models
    {
    public class Reviewer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        // many to one relationship
        public ICollection<Review> Reviews { get; set; }
    }
}