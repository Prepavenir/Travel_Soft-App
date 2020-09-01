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
        [Key]
        public int id { get; set; }
        
        [Column(TypeName = "nvarchar(50)")]
        public string FirstName { get; set; }
        
        [Column(TypeName = "nvarchar(50)")]
        public string LastName { get; set; }
        
        [Column(TypeName = "nvarchar(100)")]
        public string Objekata { get; set; }
        
        public DateTime ArrivalDate { get; set; }

        public DateTime DepartureDate { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public int FullName => (FirstName + ' ' + LastName);

        public string Date => ('From ' ArrivalDate + ' To ' + LastName);
      
    }
}
