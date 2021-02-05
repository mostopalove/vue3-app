import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm(fn) {
  const {isSubmitting, handleSubmit} = useForm({
    initialValues: {
      status: 'active'
    }
  })

  const {value: name, errorMessage: nError, handleBlur: nBlur} = useField(
    'name',
    yup.string()
      .trim()
      .required('Enter the name.')
  )
  const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
    'phone',
    yup.string()
      .trim()
      .required('Enter the phone number.')
  )
  const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
    'amount',
    yup.number()
      .required('Enter the amount.')
      .min(0, 'The amount cannot be less than zero.')
  )
  const {value: status} = useField('status')

  const onSubmit = handleSubmit(fn)

  return {
    status,
    isSubmitting,
    onSubmit,
    name,
    nError,
    nBlur,
    phone,
    pError,
    pBlur,
    amount,
    aError,
    aBlur
  }
}
