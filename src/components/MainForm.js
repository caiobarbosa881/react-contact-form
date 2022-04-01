import React from 'react';
import { Formik, Field, Form } from 'formik';
import schema from '../schema';
import './MainForm.css';

function MainForm() {

    function onSubmit(values, actions) {
        console.log('submit', values);
 }

  return (
    <div className="form-container">
    <Formik
    validationSchema={schema}
    onSubmit={onSubmit}
    validationOnMount
    initialValues={{
      name: '',
      email: '',
    }}
    render={({ values, errors }) => (
    <Form>
        <h1>Contate-nos</h1>
        <div>
          <label>Nome</label>
          <Field className='input' name="name" type="text"/>
          {errors.name && (
            <span>{errors.name}</span>
          )}
        </div>
        <div>
          <label className='labels' >E-mail</label>
          <Field className='input' name="email" type="email"/>
          {errors.email && (
            <span>{errors.email}</span>
          )}
        </div>
        <div>
          <label>Celular</label>
          <Field className='input' name="email" type="email"/>
          {errors.email && (
            <span>{errors.email}</span>
          )}
        </div>
        <div>
          <label>CPF</label>
          <Field className='input' name="email" type="email"/>
          {errors.email && (
            <span>{errors.email}</span>
          )}
        </div>
        <div>
          <label>Cidade</label>
          <Field className='input' name="email" type="email"/>
          {errors.email && (
            <span>{errors.email}</span>
          )}
        </div>
        <button type='submit'>Enviar</button>
        </Form>
        )}
      />
  </div>
  )
}

export default MainForm