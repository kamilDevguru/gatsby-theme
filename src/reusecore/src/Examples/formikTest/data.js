export const initialValues = {
  email: '',
  password: '',
  gender: '',
  profession: ''
};

export const data = {
  email: '',
  password: '',
  gender: [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    },
    {
      label: 'Other',
      value: 'other'
    }
  ],
  profession: [
    {
      label: 'Engineer',
      value: 'engineer'
    },
    {
      label: 'Doctor',
      value: 'doctor'
    },
    {
      label: 'Teacher',
      value: 'teacher'
    },
    {
      label: 'Lawyer',
      value: 'lawyer'
    }
  ]
};
