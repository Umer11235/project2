using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace database.MongoDbs
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(string ConnectionString, string databaseName){

            var client = new MongoClient(ConnectionString);
            _database=client.GetDatabase(databaseName);

            }

        public IMongoCollection<T> GetCollection<T>(string name) {

            return _database.GetCollection<T>(name);
        }


    }
}
