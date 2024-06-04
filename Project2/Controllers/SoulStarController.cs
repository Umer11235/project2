using database.MongoDbs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using models.Models_tbl;
using System.Collections;

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
        public async Task<IActionResult> Post([FromBody] Soul_Star_tbl customer)
        {
            await uow.soulTbl.AddAsync(customer);
            await uow.CommitAsync();
            return CreatedAtAction(nameof(Get), new { id = customer.Id }, customer);
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
