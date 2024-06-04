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
    //public class UnitOfWork : IunitOfWork
    //{
    //    private readonly MongoDbContext dbContext;

    //    private IRepository<Users_tbl> _userTbl;
    //    private IRepository<OTP_tbl> _otpTbl;
    //    private IRepository<QR_tbl> _qrTbl;
    //    private IRepository<Soul_Star_tbl> _soulTbl;
    //    private IRepository<Soul_Star_Image_tbl> _soulImageTbl;

    //    public UnitOfWork(MongoDbContext _dbContext)
    //    {
    //        dbContext = _dbContext;
    //    }

    //    public IRepository<Users_tbl> userTbl
    //    {
    //        get
    //        {
    //            return _userTbl ??= new Repository<Users_tbl>(dbContext, "Users_tbl");
    //        }
    //    }

    //    public IRepository<OTP_tbl> otpTbl
    //    {
    //        get
    //        {
    //            return _otpTbl ??= new Repository<OTP_tbl>(dbContext, "OTP_tbl");
    //        }
    //    }

    //    public IRepository<QR_tbl> qrTbl
    //    {
    //        get
    //        {
    //            return _qrTbl ??= new Repository<QR_tbl>(dbContext, "QR_tbl");
    //        }
    //    }

    //    public IRepository<Soul_Star_tbl> soulTbl
    //    {
    //        get
    //        {
    //            return _soulTbl ??= new Repository<Soul_Star_tbl>(dbContext, "Soul_Star_tbl");
    //        }
    //    }

    //    public IRepository<Soul_Star_Image_tbl> soulImageTbl
    //    {
    //        get
    //        {
    //            return _soulImageTbl ??= new Repository<Soul_Star_Image_tbl>(dbContext, "Soul_Star_Image_tbl");
    //        }
    //    }

    //    public Task CommitAsync()
    //    {
    //        // MongoDB does not support transactions in the same way relational databases do,
    //        // but you can implement your logic here if needed.
    //        return Task.CompletedTask;
    //    }
    //}
}
