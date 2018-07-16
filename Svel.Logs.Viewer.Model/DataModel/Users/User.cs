using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Svel.Logs.Viewer.Model.DataModel.Users
{
	/// <summary>
	/// Пользователь.
	/// </summary>
	public class User : UserBase
	{
		/// <summary>
		/// Дата выставления статуса
		/// </summary>
		public DateTime DateTime { get; set; }

		/// <summary>
		/// Статус
		/// </summary>
		public string Status { get; set; }

		/// <summary>
		///	Занимаемые пользователем рабочие места и их локации
		/// </summary>
		public List<Occupation> Occupations { get; set; }

		/// <summary>
		/// Мобильный телефон
		/// </summary>
		public string CellPhone { get; set; }

		/// <summary>
		/// Домашний телефон
		/// </summary>
		public string HomePhone { get; set; }

		/// <summary>
		/// Рабочий телефон
		/// </summary>
		public string WorkPhone { get; set; }

		/// <summary>
		/// Фото
		/// </summary>
		public byte[] Photo { get; set; }

		/// <summary>
		/// Эх, сейчас бы C# 6.0
		/// </summary>
		public User()
		{
			this.Occupations = new List<Occupation>();
		}
	}
}
