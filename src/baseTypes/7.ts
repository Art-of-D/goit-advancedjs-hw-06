/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum workDays{
  Monday,
  Tuesday,
  Wednesday,
  Thurthday,
  Friday
}

enum weekend {
  Saturday,
  Sunday
}

type Week = workDays | weekend;

function isWeekend(day: Week): boolean {
  return day === weekend.Saturday || day === weekend.Sunday; 

}