export function isDaylightSavingTime(dateToCheck: Date): boolean {
  // DST starts on the second Sunday in March
  const dstStart = new Date(dateToCheck.getFullYear(), 2, 1);
  dstStart.setDate(dstStart.getDate() + ((7 - dstStart.getDay() + 1) % 7) + 7);

  // DST ends on the first Sunday in November
  const dstEnd = new Date(dateToCheck.getFullYear(), 10, 1);
  dstEnd.setDate(dstEnd.getDate() + ((7 - dstEnd.getDay() + 1) % 7));

  return dateToCheck >= dstStart && dateToCheck < dstEnd;
}

export function getCurrentTimeInNurillo() {
  const currentTimeNurillo = new Date();
  if (isDaylightSavingTime(currentTimeNurillo)) {
    currentTimeNurillo.setUTCHours(currentTimeNurillo.getUTCHours() + 1); // Time During Daylight Savings
  } else {
    currentTimeNurillo.setUTCHours(currentTimeNurillo.getUTCHours()); // Time Not During Daylight Savings
  }
  return currentTimeNurillo;
}

export function updateClock() {
  const nurilloTimeElement = document.getElementById('nurillo-time');
  const currentTime = getCurrentTimeInNurillo();
  if (nurilloTimeElement) {
    nurilloTimeElement.textContent = currentTime.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    });
  }
}
