using Svel.Logs.Viewer.Model.DataModel;
using Svel.Logs.Viewer.Model.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Svel.Logs.Viewer.Model.Service
{
    /// <summary>
    /// 
    /// </summary>
    public class LogsService
    {
        /// <summary>
        /// 
        /// </summary>
        private readonly LogsRepository logsRepository = new LogsRepository();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        public IEnumerable<LogRecord>GetLogRecords(LogRecordFilter filter)
        {
            return logsRepository.GetLogRecords(filter);
        }

        public IEnumerable<string> GetAppList()
        {
            return logsRepository.GetAppList();
        }
    }
}
