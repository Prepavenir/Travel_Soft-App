using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace travel_soft_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GuestListController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<GuestList> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new GuestList
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
// POST: api/GuestLists
        [HttpPost]
        public async Task<ActionResult<GuestList>> PostGuestList(GuestList guestList)
        {
            _context.GuestLists.Add(guestList);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetGuestList", new { id = guestList.Id }, guestList);
            return CreatedAtAction(nameof(GetGuestList), new { id = guestList.Id }, guestList);
        }
    }
}
