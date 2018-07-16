using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Svel.Logs.Viewer.Model.DataModel.Users;
using Svel.Logs.Viewer.Model.Service;

namespace Svel.Logs.Viewer.React.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        UsersService _usersService = new UsersService();

        [HttpGet]
        [Route("GetCurrentUser")]
        public User GetCurrentUser()
        {
            return _usersService.GetUserByLogin("Valov");
        }
    }
}