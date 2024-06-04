using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace models.Models_tbl
{
    public class Users_tbl
    {
        [BsonId]
        public int Id { get; set; }
        public string Email { get; set; }
        public string? First_Name { get; set; }
        public string? Last_Name { get; set; }
        public string? Middle_Name { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
        public string? Zip { get; set; }
        public string? Language { get; set; }
        public string? Profile { get; set; }

        //public ICollection<Soul_Star_tbl> soul_Star_Tbls { get; set; }
        //public ICollection<OTP_tbl> oTP_Tbls { get; set; }
        //public ICollection<QR_tbl> qR_Tbls { get; set; }







    }
}
