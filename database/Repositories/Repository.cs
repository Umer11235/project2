using database.IRepositories;
using database.MongoDbs;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace database.Repositories
{
    public class Repository<T>:IRepository<T> where T:class
    {

        private readonly IMongoCollection<T> collection;


        public Repository(MongoDbContext context,string CollectionName) {

            collection = context.GetCollection<T>(CollectionName);
        }


        public async Task<IEnumerable<T>> GetAllAsync()
        {

            return await collection.Find(_ => true).ToListAsync();


        }


        public async Task<T> FindbyIdAsync(int id)
        {

            return await collection.Find(Builders<T>.Filter.Eq("Id", id)).FirstOrDefaultAsync();
        }


        public async Task AddAsync(T entity)
        {
            await collection.InsertOneAsync(entity);

        }

        public async Task DeleteAsync(int id, T? entity)
        {
            await collection.DeleteOneAsync(Builders<T>.Filter.Eq("Id", id));
        }

     
     
        public async Task UpdateAsync(int id, T? entity)
        {

            await collection.ReplaceOneAsync(Builders<T>.Filter.Eq("Id", id), entity);
        }

        public async Task<T> FindbyEmailAsync(string email)
        {
            return await collection.Find(Builders<T>.Filter.Eq("Email", email)).FirstOrDefaultAsync();
        }


        public async Task<T> FindbyOtpAsync(string Code)
        {
            return await collection.Find(Builders<T>.Filter.Eq("Code", Code)).FirstOrDefaultAsync();
        }
    }
}
