using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace models.Models_DTO
{
    public class Users_dto
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Middle_Name { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }
        public string Language { get; set; }
        public string Profile { get; set; }

        public ICollection<Soul_Star_dto> soul_Star_Tbls { get; set; }
        public ICollection<OTP_dto> oTP_Tbls { get; set; }
        public ICollection<QR_dto> qR_Tbls { get; set; }







    }
}
