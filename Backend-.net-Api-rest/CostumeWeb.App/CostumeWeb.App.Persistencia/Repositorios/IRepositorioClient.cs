using System;
using System.Collections.Generic;
using CostumeWeb.App.Dominio;
namespace CostumeWeb.App.Persistencia
{
    public interface IRepositorioClient
    {
        IEnumerable<Client> GetAllClients();
        Client AddClient(Client client);
        Client UpdateClient(Client client);
        Boolean DeleteClient(int idClient);
        Client GetClient(int idClient); 

    }

}