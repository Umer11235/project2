using database.MongoDbs;
using database.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using models.Models_DTO;
using models.Models_tbl;

namespace Project2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IunitOfWork _unitOfWork;

        public UserController(IunitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var customers = await _unitOfWork.userTbl.GetAllAsync();
            return Ok(customers);
        }

        [HttpGet("id")]
        public async Task<IActionResult> Get(int id)
        {
            var customer = await _unitOfWork.userTbl.FindbyIdAsync(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }



        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Users_dto customer)
        {
            

            var data = new Users_tbl
            {
                City = customer.City,
                Country = customer.Country,
                First_Name = customer.First_Name,
                Last_Name = customer.Last_Name,
                Email = customer.Email,
                Language = customer.Language,
                Zip = customer.Zip
            };

            await _unitOfWork.userTbl.AddAsync(data);
            await _unitOfWork.CommitAsync();
            return CreatedAtAction(nameof(Get), new { id = data.Id }, customer);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Users_tbl customer)
        {
            await _unitOfWork.userTbl.UpdateAsync(id, customer);
            await _unitOfWork.CommitAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id, Users_tbl customer)
        {
            await _unitOfWork.userTbl.DeleteAsync(id, customer);
            await _unitOfWork.CommitAsync();
            return NoContent();
        }



        [HttpGet("email")]
        public async Task<IActionResult> GetEmail(string email)
        {
            var customer = await _unitOfWork.userTbl.FindbyEmailAsync(email);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

    }
}
