using hwApril15.Data;
using Microsoft.AspNetCore.Mvc;

namespace hwApril15.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        private string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet("getpeople")]
        public List<Person> GetPeople()
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetPeople();
        }

        [HttpPost("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.AddPerson(person);
        }

        [HttpGet("getbyid")]
        public Person GetById(int id)
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetPersonById(id);
        }

        [HttpPost("addcar")]
        public void AddCar(Car car)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.AddCar(car);
        }

        [HttpPost("deletecars")]
        public void DeleteCars(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.DeleteCars(person.Id);
        }

        [HttpGet("getcars")]
        public List<Car> GetCars(int personId)
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetCars(personId);
        }
    }
}
