using System;
using System.Collections.Generic;
using System.Text;

namespace Svel.Logs.Viewer.Model.DataModel
{
    public class LogRecordFilter
    {
        //public DateTime? DT_From { get; set; }

        //public DateTime? DT_To { get; set; }

        public string App { get; set; }

        public string UserName { get; set; }

        public string HostName { get; set; }

        public string Level { get; set; }
    }
}
