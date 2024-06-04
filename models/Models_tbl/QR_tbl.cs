using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace models.Models_tbl
{
    public class QR_tbl
    {
        [BsonId]
        public int Id { get; set; }
        public int QR_Link { get; set; }

        [ForeignKey("User_Id")]
        public int? User_Id { get; set; }

        public Users_tbl User { get; set; }

    }
}
