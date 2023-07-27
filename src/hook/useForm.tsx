import { useState, ChangeEvent } from 'react'

interface FormValues {
  [key: string]: string;
}

interface useFormProps {
  initialValues?: FormValues;
}

const useForm = ({ initialValues = {} }: useFormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return {
    values,
    handleChange,
  }
}

export default useForm
