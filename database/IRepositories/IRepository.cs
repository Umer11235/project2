using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace database.IRepositories
{
    public interface IRepository<T> where T: class
    {

         
       Task<IEnumerable<T>> GetAllAsync();

        Task<T> FindbyIdAsync(int id);
        Task<T> FindbyEmailAsync(string email);
        Task<T> FindbyOtpAsync(string Code);
        


            Task AddAsync(T entity);

        Task UpdateAsync(int id, T? entity);
        Task DeleteAsync(int id, T? entity);


    
    }
}
