using database.IRepositories;
using database.MongoDbs;
using models.Models_tbl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace database.Repositories
{




    public class Users_Repo : Repository<Users_tbl>, IUsers_Repo
    {
        public Users_Repo(MongoDbContext context) : base(context, "User") { }
    }

    public class Otp_Repo : Repository<OTP_tbl>, IOTP_Repo
    {
        public Otp_Repo(MongoDbContext context):base(context,"OTP")
        {
            
        }
    }


    public class QR_Repo : Repository<QR_tbl>, IQR_Repo
    {
        public QR_Repo(MongoDbContext context) : base(context, "QR")
        {

        }
    }



    public class Soul_Star_Repo : Repository<Soul_Star_tbl>, ISoul_Star_Repo
    {
        public Soul_Star_Repo(MongoDbContext context) : base(context, "Soul_Star")
        {

        }
    }


    public class Soul_Image_Repo : Repository<Soul_Star_Image_tbl>, ISoul_Image_Repo
    {
        public Soul_Image_Repo(MongoDbContext context) : base(context, "Soul_Star_Image")
        {

        }
    }

}
