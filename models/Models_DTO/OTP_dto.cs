using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace models.Models_DTO
{
    public class OTP_dto
    {
        public string Id { get; set; }
        public string Code { get; set; }
        public DateTime Valid_Till { get; set; }
        public string email { get; set; }



        [ForeignKey("User_Id")]
        public int? User_Id { get; set; }

        public Users_dto users_Tbl { get; set; }



    }
}
