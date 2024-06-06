using database.MongoDbs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using models.Models_DTO;
using models.Models_tbl;
using System.Collections;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Reflection;

namespace Project2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SoulStarController : ControllerBase
    {


        private readonly IunitOfWork uow;

        public SoulStarController(IunitOfWork iunit)
        {
            uow = iunit;
        }



        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var customers = await uow.soulTbl.GetAllAsync();
            return Ok(customers);
        }

        [HttpGet("id")]
        public async Task<IActionResult> Get(int id)
        {
            var customer = await uow.soulTbl.FindbyIdAsync(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }



        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Soul_Star_dto customer)
        {

            var data = new Soul_Star_tbl()
            {
                Type = customer.Type,
                First_Name = customer.First_Name,
                Last_Name = customer.Last_Name,
                Middle_Name = customer.Middle_Name,
                Title = customer.Title,
                Introductory_Note = customer.Introductory_Note,
                Date_of_Birth = customer.Date_of_Birth,
                Date_of_Passing = customer.Date_of_Passing,
                Contact = customer.Contact,
                Profile = customer.Profile,
                Banner = customer.Banner,

                Note = customer.Note,
                User_Id = customer.User_Id



            };


            await uow.soulTbl.AddAsync(data);
            await uow.CommitAsync();
            return CreatedAtAction(nameof(Get), new { id = data.Id }, customer);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Soul_Star_tbl customer)
        {
            await uow.soulTbl.UpdateAsync(id, customer);
            await uow.CommitAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id, Soul_Star_tbl customer)
        {
            await uow.soulTbl.DeleteAsync(id, customer);
            await uow.CommitAsync();
            return NoContent();
        }


    }
}
