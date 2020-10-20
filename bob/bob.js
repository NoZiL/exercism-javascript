export const hey = (messageNonTrimmed) => {
  const message = messageNonTrimmed.trim()
  const shouting = !message.match(/[a-z]/) && message.match(/[A-Z]/)
  const question = message.match(/\?+$/)
  if (!message) return 'Fine. Be that way!'
  if (shouting && question) return 'Calm down, I know what I\'m doing!'
  if (shouting) return 'Whoa, chill out!'
  if (question) return 'Sure.'
  return 'Whatever.'
}
