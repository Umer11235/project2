using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace models.Models_DTO
{
    public class Soul_Star_dto
    {

        public int Id { get; set; }
        public int Type { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Title { get; set; }
        public string Introductory_Note { get; set; }
        public string Date_of_Birth { get; set; }
        public string Date_of_Passing { get; set; }
        public string Contact { get; set; }
        public string Profile { get; set; }
        public string Banner { get; set; }
        public string Note { get; set; }

        [ForeignKey("User_Id")]
        public int? User_Id { get; set; }

        public Users_dto users_Tbl { get; set; }

        













    }
}
