using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace CostumeWeb.App.Dominio
{
    public class UserAdmin   
    {
        [Key]
        public int id{get;set;}
        [Required]
        [Column(TypeName ="VARCHAR")]
        [StringLength(250)]
        public string name{get;set;}
        [Required]
        [Column(TypeName ="VARCHAR")]
        [StringLength(45)]
        public string email {get;set;}
        [Required]
        [Column(TypeName ="VARCHAR")]
        [StringLength(45)]
        public string password {get;set;}  
    }
}