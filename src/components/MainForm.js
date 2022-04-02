import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import schema from '../schema';
import './MainForm.css';

function MainForm() {

    function onSubmit(values) {
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
      celular: '',
      cpf: '',
      cidade: '',
    }}
    render={({ errors }) => (
    <Form>
        <h1>Contate-nos</h1>
        <div>
          <label>Nome</label>
          <Field className='input' name="name" type="text"/>
          {errors.name && (
            <p className='error'>{errors.name}</p>
          )}
        </div>
        <div>
          <label>E-mail</label>
          <Field className='input' name="email" type="email"/>
          {errors.email && (
            <p className='error'>{errors.email}</p>
          )}
        </div>
        <div>
          <label>Celular</label>
          <Field className='input' name="celular" type="text"/>
          {errors.celular && (
            <p className='error'>{errors.celular}</p>
          )}
        </div>
        <div>
          <label>CPF</label>
          <Field className='input' name="cpf" type="text"/>
          {errors.cpf && (
           <p className='error'>{errors.cpf}</p>
          )}
        </div>
        <div>
          <label>Cidade</label>
          <Field className='input' name="cidade" type="text"/>
          {errors.cidade && (
           <p className='error'>{errors.cidade}</p>
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