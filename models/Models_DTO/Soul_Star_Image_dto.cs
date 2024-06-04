using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace models.Models_DTO
{
    public class Soul_Star_Image_dto
    {

        public int Id { get; set; }
        
        

        public IFormFile Image { get; set; }

        public int? Soul_Star_Id { get; set; }

    }
}
