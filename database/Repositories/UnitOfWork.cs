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
    public class UnitOfWork : IunitOfWork
    {
        private readonly MongoDbContext dbContext;

        public UnitOfWork(MongoDbContext _dbContext)
        {
            dbContext = _dbContext;
            userTbl = new Users_Repo(dbContext);
            otpTbl = new Otp_Repo(dbContext);
            qrTbl = new QR_Repo(dbContext);
            soulTbl = new Soul_Star_Repo(dbContext);
            soulImageTbl = new Soul_Image_Repo(dbContext);
            // Initialize other repositories similarly
            //userTblRepo1= new Users_Repo(_dbContext);
        }


        public IRepository<Users_tbl> userTbl { get; private set; }

        public IRepository<OTP_tbl> otpTbl { get; private set; }

        public IRepository<QR_tbl> qrTbl { get; private set; }

        public IRepository<Soul_Star_tbl> soulTbl { get; private set; }

        public IRepository<Soul_Star_Image_tbl> soulImageTbl { get; private set; }

        public Users_tbl userTblRepo1 { get; private set; }

        public Task CommitAsync()
        {
            return Task.CompletedTask;

        }
    }
}
