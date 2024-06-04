using database.IRepositories;
using models;
using models.Models_tbl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace database.MongoDbs
{
    public interface IunitOfWork
    {


        IRepository<Users_tbl> userTbl { get; }


        IRepository<OTP_tbl> otpTbl { get; }

        IRepository<QR_tbl> qrTbl { get; }
        IRepository<Soul_Star_tbl> soulTbl { get; }

        IRepository<Soul_Star_Image_tbl> soulImageTbl { get; }
        //IUsers_Repo userTblRepo1 { get; }

        Task CommitAsync();

    }
}
