using models.Models_tbl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace database.IRepositories
{


    //public interface ICustomerRepo : IRepository<Setup_Customer> { }

    public interface IUsers_Repo : IRepository<Users_tbl> { 
    
    }
    public interface IOTP_Repo : IRepository<OTP_tbl> { }
    public interface IQR_Repo : IRepository<QR_tbl> { }
    public interface ISoul_Star_Repo : IRepository<Soul_Star_tbl> { }
    public interface ISoul_Image_Repo : IRepository<Soul_Star_Image_tbl> { }


}
