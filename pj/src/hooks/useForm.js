import { useState, useCallback } from 'react';

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handler = useCallback(
    (e) => {
      const { name, value } = e.target;
      console.log(name,value)
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  return [form, handler];
};
