export function getRandomAppointment(): Date {
  const today = new Date();
  const twoMonthsFromNow = new Date();
  twoMonthsFromNow.setMonth(today.getMonth() + 3);

  const randomTime =
    today.getTime() +
    Math.random() * (twoMonthsFromNow.getTime() - today.getTime());

  const randomDate = new Date(randomTime);

  // Generate a random hour between 9 and 17 (5pm)
  const randomHour = Math.floor(Math.random() * (17 - 9 + 1)) + 9;

  // Generate random minutes (0 or 30)
  const randomMinutes = Math.round(Math.random()) * 30;

  randomDate.setHours(randomHour, randomMinutes, 0, 0);

  return randomDate;
}
