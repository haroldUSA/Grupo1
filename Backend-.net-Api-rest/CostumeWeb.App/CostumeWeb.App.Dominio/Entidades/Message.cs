using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace CostumeWeb.App.Dominio
{
    public class Message
    {
        [Key]
        public int id{get;set;}
        [Required]
        [Column(TypeName ="VARCHAR")]
        [StringLength(250)]
        public string messagetext{get;set;}
    }
}
