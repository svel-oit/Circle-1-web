using System;
using System.Collections.Generic;
using System.Text;

namespace Svel.Logs.Viewer.Model.DataModel
{
    public class LogRecord
    {
        public int ID { get; set; }

        public DateTime DT { get; set; }

        public string Level { get; set; }

        public string  App { get; set; }

        public string UserName { get; set; }

        public string HostName { get; set; }

        public string Message { get; set; }
    }
}
