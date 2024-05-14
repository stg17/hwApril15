using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hwApril15.Data
{
    public class PeopleRepository
    {
        private string _connectionString;
        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetPeople()
        {
            var context = new PeopleDataContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }

        public void AddPerson(Person person)
        {
            var context = new PeopleDataContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }

        public Person GetPersonById(int id)
        {
            var context = new PeopleDataContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }

        public void AddCar(Car car)
        {
            var context = new PeopleDataContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }

        public void DeleteCars(int personId)
        {
            var context = new PeopleDataContext(_connectionString);
            var cars = context.Cars.Where(c => c.PersonId == personId).ToList();
            context.RemoveRange(cars);
            context.SaveChanges();
        }

        public List<Car> GetCars(int personId)
        {
            var context = new PeopleDataContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == personId).ToList();
        }
    }
}
