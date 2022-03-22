import React from 'react';
import './App.css';
import { Formik, Field, Form } from 'formik';
import schema from './schema';

function App() {
 function onSubmit(values, actions) {
    console.log('submit', values);
 }

  return (
    <div className="App">
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
          <div>
            <label>Nome</label>
            <Field name="name" type="text"/>
            {errors.name && (
              <span>{errors.name}</span>
            )}
          </div>
          <div>
            <label>Email</label>
            <Field name="email" type="email"/>
            {errors.email && (
              <span>{errors.email}</span>
            )}
          </div>
          <button type='submit'>Enviar</button>
          </Form>
          )}
        />
    </div>
  );
}

export default App;
