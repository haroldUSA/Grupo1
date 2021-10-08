using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace CostumeWeb.App.Dominio
{
    public class QualificationReservation
    {
        [Key]
        public int id { get; set; }
        [Required]
        [Column(TypeName = "INT")]
        [ForeignKey("Reservation")]
        public int reservation_id { get; set; }
        public Reservation reservation {get;set;} 
        [Required]
        [Column(TypeName = "INT")]
        [Range(0, 5)]
        public int calification { get; set; }
        [Required]
        [Column(TypeName = "VARCHAR")]
        [StringLength(250)]
        public string message { get; set; }
    }
}