using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace models.Models_DTO
{
    public class QR_dto
    {
        public int Id { get; set; }
        public int QR_Link { get; set; }

        [ForeignKey("User_Id")]
        public int? User_Id { get; set; }

        public Users_dto User { get; set; }

    }
}
