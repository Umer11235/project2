using database.MongoDbs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using models.Models_DTO;
using models.Models_tbl;

namespace Project2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SoulstarImage_Controller : ControllerBase
    {


        private IWebHostEnvironment env;
        private readonly IunitOfWork uow;

        public SoulstarImage_Controller(IunitOfWork iunit,IWebHostEnvironment _env)
        {
            env = _env;
            uow = iunit;
        }



        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var customers = await uow.soulImageTbl.GetAllAsync();
            return Ok(customers);
        }

        [HttpGet("id")]
        public async Task<IActionResult> Get(int id)
        {
            var customer = await uow.soulImageTbl.FindbyIdAsync(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }



        [HttpPost]
        public async Task<IActionResult> Post([FromForm] Soul_Star_Image_dto customer)
        {

            if (customer.Image==null||customer.Image.Length==0)
            {
                return BadRequest("no Image Provided");
            }

            var filename = $"{Guid.NewGuid()}_{customer.Image.FileName}";
            var uploadpath = Path.Combine(Directory.GetCurrentDirectory(),"uploads");

            if (!Directory.Exists(uploadpath))
            {
            Directory.CreateDirectory(uploadpath);

            }

            var filepath = Path.Combine(uploadpath, filename);




            using (var stream=new FileStream(filepath,FileMode.Create))
            {
                await customer.Image.CopyToAsync(stream);
            }

            var data = new Soul_Star_Image_tbl()
            {

                Id = customer.Id,
                Image = filename,
                Soul_Star_Id = customer.Soul_Star_Id

            };



                await uow.soulImageTbl.AddAsync(data);
            await uow.CommitAsync();
            return CreatedAtAction(nameof(Get), new { id = customer.Id }, customer);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Soul_Star_Image_tbl customer)
        {
            await uow.soulImageTbl.UpdateAsync(id, customer);
            await uow.CommitAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id, Soul_Star_Image_tbl customer)
        {
            await uow.soulImageTbl.DeleteAsync(id, customer);
            await uow.CommitAsync();
            return NoContent();
        }


    }
}
