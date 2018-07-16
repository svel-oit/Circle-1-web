using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Svel.Logs.Viewer.Model.DataModel;
using Svel.Logs.Viewer.Model.Service;

namespace Svel.Logs.Viewer.React.Controllers
{
    [Produces("application/json")]
    [Route("api/Logs")]
    public class LogsController : Controller
    {
        private LogsService service = new LogsService();

        [HttpPost]
        [Route("GetLogRecords")]
        public LogRecord[] GetLogRecords([FromBody] LogRecordFilter filter)
        {
            return service.GetLogRecords(filter).ToArray();
        }

        [HttpGet]
        [Route("GetAppList")]
        public string[] GetAppList()
        {
            return service.GetAppList().ToArray();
        }
    }
}