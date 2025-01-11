namespace backend2.Models
{
    public class Referral
    { 
        public int Id { get; set; }
        public int UserIdReferrer { get; set; }
        public string EmailRef { get; set; }
        public string NameRef { get; set; }

        public int ReferringUserId { get; set; }



        public Referral(int id, int userIdReferrer, string emailRef, string nameRef)
        {
            Id = id;
            UserIdReferrer = userIdReferrer;
            EmailRef = emailRef;
            NameRef = nameRef;
        }

    }
}
