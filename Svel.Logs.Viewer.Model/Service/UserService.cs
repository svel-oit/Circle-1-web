using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using Dapper;
using Svel.Logs.Viewer.Model.DataModel.Users;

namespace Svel.Logs.Viewer.Model.Service
{
    /// <summary>
    /// Сервис для работы с пользователями.
    /// </summary>
    public class UsersService
    {
        /// <summary>
        /// Строка соединения с базой.
        /// </summary>
        private readonly string _connectionString = "data source=sbd; Database=Users; User Id=srv_users_api; Password=K3pMJP;";

        /// <summary>
        /// Получение имени сервера.
        /// </summary>
        /// <returns>Имя сервера.</returns>
        public string GetUsedServerName()
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                if (conn.State != ConnectionState.Open)
                    conn.Open();

                return conn.ExecuteScalar<string>(@"select @@SERVERNAME");
            }
        }

        /// <summary>
        /// Получение базовой инфомации о пользователях.
        /// </summary>
        /// <param name="ids">id пользователей.</param>
        /// <returns>Базовая информация о пользователях.</returns>
        public IEnumerable<UserBase> GetUserBaseInfoByIds(IEnumerable<int> ids)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                if (conn.State != ConnectionState.Open)
                    conn.Open();

                var table = new DataTable("IntTableType");

                table.Columns.Add("id", typeof(int));

                foreach (var id in ids)
                    table.Rows.Add(id);

                return conn.Query<UserBase>(@"
					select	personality ID,
							ad_login login,
							ad_sid sid,
							full_name FullName,
							email Email
					from	Employee.personality
						join @ids i on i.id = personality", new { ids = table.AsTableValuedParameter("IntTableType") });
            }
        }

        /// <summary>
        /// Получение пользователя по логину.
        /// </summary>
        /// <param name="login">логин.</param>
        /// <returns>User</returns>
        public User GetUserByLogin(string login)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                if (conn.State != ConnectionState.Open)
                    conn.Open();

                return conn.Query<User, Occupation, User>(@"
						select
							g.personality ID,
							g.dt DateTime,
							g.status Status,
							g.ad_login login,
							g.ad_sid sid,
							g.full_name FullName,
							g.email Email,
							g.cellphone Cellphone,
							g.home_phone HomePhone,
							g.work_phone WorkPhone,
							g.photo Photo,
							g.occupation_id ID,
							g.job_name JobName,
							g.location_name JobLocation
						from Employee.GetAll() g 
						where ad_login = @login", (user, occupation) => { user.Occupations.Add(occupation); return user; }, new { login }).FirstOrDefault();
            }
        }
    }
}
