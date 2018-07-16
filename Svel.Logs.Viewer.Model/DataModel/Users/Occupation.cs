using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Svel.Logs.Viewer.Model.DataModel.Users
{
	/// <summary>
	///	Занимаемая пользователем должность и локация
	/// </summary>
	public class Occupation
	{
		/// <summary>
		/// ID.
		/// </summary>
		public int ID { get; set; }

		/// <summary>
		/// Наименование должности
		/// </summary>
		public string JobName { get; set; }

		/// <summary>
		///	Местноахождение рабочего места
		/// </summary>
		public string JobLocation { get; set; }
	}
}
