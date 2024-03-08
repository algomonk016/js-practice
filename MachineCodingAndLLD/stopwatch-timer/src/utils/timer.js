export const getTime = (time) => {
  const hours = getHours(time);
  const minutes = getMinutes(time);
  const seconds = getSeconds(time);
  const milliseconds = getMilliseconds(time);

  return {
    hours,
    minutes,
    seconds,
    milliseconds
  }
}

const getHours = (time) => {
  return Math.floor((time / (60 * 60 * 1000)) % 24);
}

const getMinutes = (time) => {
  return Math.floor((time / (60 * 1000)) % 60);
}

const getSeconds = (time) => {
  return Math.floor((time / 1000) % 60);
}

const getMilliseconds = (time) => {
  return time % 1000;
}