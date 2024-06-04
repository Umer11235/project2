using Microsoft.AspNetCore.Http;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace models.Models_tbl
{
    public class Soul_Star_Image_tbl
    {
        [BsonId]
        public int Id { get; set; }



        //public IFormFile Image { get; set; }
        public string Image { get; set; }

        [ForeignKey("Soul_Star_Id")]
        public int? Soul_Star_Id { get; set; }

        //public Soul_Star_tbl Soul_Star_Tbl { get; set; }

    }
}
