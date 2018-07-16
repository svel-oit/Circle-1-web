using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Svel.Logs.Viewer.Model.DataModel.Users
{
	/// <summary>
	/// Базовая информация о пользователе.
	/// </summary>
	public class UserBase
	{
		/// <summary>
		/// ID
		/// </summary>
		public int ID { get; set; }

		/// <summary>
		/// Логин
		/// </summary>
		public string Login { get; set; }

		/// <summary>
		/// AD SID 
		/// </summary>
		public string SID { get; set; }

		/// <summary>
		/// ФИО пользователя
		/// </summary>
		public string FullName { get; set; }

		/// <summary>
		/// EMail
		/// </summary>
		public string Email { get; set; }
	}
}
