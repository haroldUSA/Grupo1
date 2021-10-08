using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace CostumeWeb.App.Dominio
{
    public class Costume
    {
        [Key]
        public int id { get; set; }
        [Required]
        [Column(TypeName = "VARCHAR")]
        [StringLength(45)]
        public string brand { get; set; }
        [Required]
        [Column(TypeName = "INT")]
        public int model { get; set; }
        [Required]
        [Column(TypeName = "INT")]
        [ForeignKey("category")]
        public int category_id { get; set; }
        public Category category {get;set;}
        [Required]
        [Column(TypeName = "VARCHAR")]
        [StringLength(45)]
        public string name { get; set; }
    }
}