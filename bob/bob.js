export const hey = (messageNonTrimmed) => {
  const message = messageNonTrimmed.trim();
  const shouting = !message.match(/[a-z]/) && !!message.match(/[A-Z]/);
  const question = !!message.match(/\?+$/);
  switch (true) {
    case !message:
      return "Fine. Be that way!";
    case shouting && question:
      return "Calm down, I know what I'm doing!";
    case shouting:
      return "Whoa, chill out!";
    case question:
      return "Sure.";
    default:
      return "Whatever.";
  }
};
