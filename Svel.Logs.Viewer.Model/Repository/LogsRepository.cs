using Svel.Logs.Viewer.Model.DataModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using Dapper;

namespace Svel.Logs.Viewer.Model.Repository
{
    /// <summary>
    /// 
    /// </summary>
    public class LogsRepository
    {
        /// <summary>
        /// Коннекшн стринг
        /// </summary>
        private const string CONNECTION_STRING = @"data source=57-erp-2;initial catalog=Logs; persist security info=True;user id=srv_logger;password=*******;";

        /// <summary>
        /// В этом формате мы будем передавать дату в sql.
        /// </summary>
        private readonly string SQL_DATE_FORMAT = "yyyy-MM-dd";


        /// <summary>
        /// Получение списка приложений.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<string> GetAppList()
        {
            using (SqlConnection conn = new SqlConnection(CONNECTION_STRING))
            {
                if (conn.State != ConnectionState.Open)
                    conn.Open();

                return conn.Query<string>(@"select distinct app from Logs.Logs.log");
            }
        }

        /// <summary>
        /// Получение логов по фильтру
        /// </summary>
        /// <param name="filter">фильтр</param>
        /// <returns></returns>
        public IEnumerable<LogRecord> GetLogRecords(LogRecordFilter filter)
        {
            using (SqlConnection conn = new SqlConnection(CONNECTION_STRING))
            {
                if (conn.State != ConnectionState.Open)
                    conn.Open();

                string query = (string.Format(@"
                select top 100 	log as ID,
		                dt as DT,
		                level as Level,
		                app as App,
		                user_name as UserName,
		                host_name as HostName,
		                message as Message
                from	Logs.Logs.log l {0}", GetFilterQuery(filter)));

                return conn.Query<LogRecord>(query);
            }
        }

        /// <summary>
        /// Клеим запрос для фильтра логов
        /// </summary>
        /// <param name="filter">фильтр</param>
        /// <returns></returns>
        private string GetFilterQuery(LogRecordFilter filter)
        {
            if (filter == null)
                return "";

            StringBuilder sb = new StringBuilder();

            if (!string.IsNullOrWhiteSpace(filter.App))
                sb.AppendFormat("{0} l.app = N'{1}' {2}", sb.Length <= 0 ? "" : "and", filter.App, Environment.NewLine);

            if (!string.IsNullOrWhiteSpace(filter.HostName))
                sb.AppendFormat("{0} l.host_name = N'{1}' {2}", sb.Length <= 0 ? "" : "and", filter.HostName, Environment.NewLine);

            if (!string.IsNullOrWhiteSpace(filter.UserName))
                sb.AppendFormat("{0} l.user_name = N'{1}' {2}", sb.Length <= 0 ? "" : "and", filter.UserName, Environment.NewLine);

            if (!string.IsNullOrWhiteSpace(filter.Level))
                sb.AppendFormat("{0} l.level = N'{1}' {2}", sb.Length <= 0 ? "" : "and", filter.Level, Environment.NewLine);

            //if (filter.DT_From.HasValue)
            //    sb.AppendFormat("{0} l.dt >= cast(N'{1}' as date){2}", sb.Length <= 0 ? "" : "and", filter.DT_From.Value.Date.ToString(SQL_DATE_FORMAT), Environment.NewLine);

            //if (filter.DT_To.HasValue)
            //    sb.AppendFormat("{0} l.dt < cast(N'{1}' as date) {2}", sb.Length <= 0 ? "" : "and", filter.DT_To.Value.Date.ToString(SQL_DATE_FORMAT), Environment.NewLine);

            if (sb.Length > 0)
                sb.Insert(0, "where");

            return sb.ToString();
        }
    }
}
