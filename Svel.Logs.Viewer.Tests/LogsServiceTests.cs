using Microsoft.VisualStudio.TestTools.UnitTesting;
using Svel.Logs.Viewer.Model.DataModel;
using Svel.Logs.Viewer.Model.Service;
using System;
using System.Linq;

namespace Svel.Logs.Viewer.Tests
{
    [TestClass]
    public class LogsServiceTests
    {
        [TestMethod]
        public void GetLogRecords_Filter_LogRecordsFiltered()
        {
            var filter = new LogRecordFilter();

            filter.DT_From = DateTime.Now.AddDays(-7);
            filter.DT_To = DateTime.Now;

            var service = new LogsService();

            var result = service.GetLogRecords(filter);

            Assert.IsTrue(result.Any());
        }
    }
}
