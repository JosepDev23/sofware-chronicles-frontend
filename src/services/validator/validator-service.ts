import validatePassword from './methods/validate-password'
import validatePhoneNumber from './methods/validate-phone-number'
import validateUsername from './methods/validate-username'

const ValidatorService = {
  validatePhoneNumber,
  validatePassword,
  validateUsername,
}

export default ValidatorService
