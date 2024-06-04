using database.MongoDbs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using models.Models_DTO;
using models.Models_tbl;
using System.Net.Mail;

namespace Project2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IunitOfWork _unitOfWork;

        public AuthController(IunitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] string email)
        {
            var user = await _unitOfWork.userTbl.FindbyEmailAsync(email);
            if (user == null)
            {
                return NotFound("User not found");
            }

            var otp = GenerateOTP();
            var otpRecord = new OTP_tbl
            {
                Id = Guid.NewGuid().ToString(),
                email = email,
                Code = otp,
                Valid_Till = DateTime.UtcNow.AddMinutes(5) // OTP valid for 5 minutes
            };

            await _unitOfWork.otpTbl.AddAsync(otpRecord);

            // Send OTP to user's email
            SendEmail(email, otp);

            return Ok("OTP sent to your email");
        }

        private string GenerateOTP()
        {
            var random = new Random();
            return random.Next(100000, 999999).ToString();
        }

        private void SendEmail(string email, string otp)
        {

            //Environment.GetEnvironmentVariable("User"),
            //      Environment.GetEnvironmentVariable("Pass")


            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Host = "smtp.gmail.com",
                Port = 587,
                Credentials = new System.Net.NetworkCredential(
          
                "exploreapies@gmail.com",
                    "2470025us"
                    ),
                UseDefaultCredentials = false,
                EnableSsl = true

        };

            smtpClient.Send("exploreapies@gmail.com", email, "Your OTP Code", $"Your OTP is: {otp}");
        }


        [HttpPost("OtpCheck")]
        public async Task<IActionResult> OtpCheck([FromBody] int combinedOtp)
        {
           var data1= await _unitOfWork.otpTbl.FindbyOtpAsync(combinedOtp.ToString());
            var data =await _unitOfWork.userTbl.FindbyEmailAsync(data1.email);

            return Ok(data);
        }

}
}
