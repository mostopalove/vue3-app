const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'User with this email was not found.',
  INVALID_PASSWORD: 'Invalid password.',
  auth: 'Please sign in.'
}

export function error(code) {
  return ERROR_CODES[code] || 'Unknown error'
}
