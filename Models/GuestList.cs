using System;
/* using System.Collection.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks; */

namespace travel_soft_app
{
    public class GuestList
    {
        public int id { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string Objekata { get; set; }
        
        public DateTime ArrivalDate { get; set; }

        public DateTime DepartureDate { get; set; }

        public string FullName => (FirstName + ' ' + LastName);      
    }
}
