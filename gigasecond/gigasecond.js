const GIGASECOND = Math.pow(10, 9);

export const gigasecond = (moment) =>
  new Date(moment.getTime() + GIGASECOND * 1000);
