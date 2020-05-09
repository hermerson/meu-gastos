import React, {useRef} from 'react';
import {Button} from 'react-native';
import {Form} from '@unform/mobile';
import Input from './input';

export default function SignIn() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    const errors = validate();
    if (JSON.stringify(errors) === '{}') {
      console.log(data);
    }
  }

  function validate(field) {
    const errors = {};
    const data = formRef.current.getData();
    if (field === 'name' || !field) {
      if (!data.name) {
        errors.name = 'Campo obrigatório';
      }
    }

    if (field === 'description' || !field) {
      if (!data.description) {
        errors.description = 'Campo obrigatório';
      }
    }

    formRef.current.setErrors(errors);
    return errors;
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" onBlur={() => validate('name')} />
      <Input name="description" onBlur={() => validate('description')} />
      <Button title="Avançar" onPress={() => formRef.current.submitForm()} />
    </Form>
  );
}
