using System;
using System.Collections.Generic;
using CostumeWeb.App.Dominio;
using System.Linq;
namespace CostumeWeb.App.Persistencia
{
    public class RepositorioClient : IRepositorioClient
    {

        private readonly AppContext _appContex;

        /// <summary>
        //description metodo constructor recibe un apptontex
        /// </summary>>
        /// <param name="appcontext">description</param>>

        public RepositorioClient()
        {
            _appContex = new AppContext();
        }
        public RepositorioClient(AppContext appContex)
        {
            _appContex = appContex;
        }

        public Client AddClient(Client client)
        {
            var clientAdicionado = _appContex.Clients.Add(client);
            _appContex.SaveChanges();
            return clientAdicionado.Entity;
        }

        public Boolean DeleteClient(int idClient)
        {
            var clientEncontrado = _appContex.Clients.FirstOrDefault(p => p.Id == idClient);
            if (clientEncontrado == null)
            {
                return false;
            }
            else
            {
                _appContex.Clients.Remove(clientEncontrado);
                _appContex.SaveChanges();
                return true;
            }

        }

        public Client GetClient(int idClient)
        {
            Client clientretornado = _appContex.Clients.FirstOrDefault(p => p.Id == idClient);
            if (clientretornado.genero == null)
            {
             clientretornado.genero=_appContex.Generos.FirstOrDefault(p => p.Id == clientretornado.genero_id);
            }
            return _appContex.Clients.FirstOrDefault(p => p.Id == idClient);
        }

        public IEnumerable<Client> GetAllClients()
        {
            return _appContex.Clients;
        }

        public Client UpdateClient(Client client)
        {
            var clientEncontrado = _appContex.Clients.FirstOrDefault(p => p.Id == client.Id);
            if (clientEncontrado == null)
            {
                clientEncontrado.nombres = client.nombres;
                clientEncontrado.email = client.email;
                clientEncontrado.password = client.password;
                clientEncontrado.age = client.age;
                _appContex.SaveChanges();
                return clientEncontrado;
            }
            else
            {
                return clientEncontrado;
            }
        }
    }
}