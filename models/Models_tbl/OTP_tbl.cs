using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace models.Models_tbl
{
    public class OTP_tbl
    {
        [BsonId]
        public string Id { get; set; }
        public string email { get; set; }
        public string Code { get; set; }
        public DateTime? Valid_Till { get; set; }



        [ForeignKey("User_Id")]
        public int? User_Id { get; set; }

        public Users_tbl users_Tbl { get; set; }



    }
}
