export default function validatePhoneNumber(phoneNumber: string): boolean {
  const regex: RegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/
  return regex.test(phoneNumber)
}
