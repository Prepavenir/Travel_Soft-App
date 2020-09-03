using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace travel_soft_app
{
    public class DonationDBContext : DbContext
    {
        public DonationDBContext(Microsoft.EntityFrameworkCore.DbContextOptions options)
            : base(options)
        {
        }
        public DbSet<GuestList> GuestLists { get; set; }
    }
}