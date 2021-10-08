using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace CostumeWeb.App.Dominio
{
    public class Reservation
    {
        [Key]
        public int id { get; set; }
        [Required]
        [Column(TypeName = "INT")]
        [ForeignKey("client")]
        public int client_id { get; set; }
        public Client client {get;set;}
        [Required]
        [Column(TypeName = "INT")]
        [ForeignKey("costume")]
        public int costume_id { get; set; }
        public Costume costume {get;set;}
        [Required]
        [Column(TypeName = "INT")]
        [Range(0, 5)]
        public int calification { get; set; }
        [Required]
        [Column(TypeName = "DATE")]
        [StringLength(250)]
        public DateTime initialDate { get; set; }
        [Required]
        [Column(TypeName = "DATE")]
        [StringLength(250)]
        public DateTime finalDate { get; set; }
    }
}