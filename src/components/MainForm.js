import React from 'react';
import { useFormik } from 'formik';
import './MainForm.css';
import NumberFormat from 'react-number-format';


function MainForm() {

  const validate = values => {
    const errors = {};
    if (!values.nome) {
      errors.nome = 'Required';
    } else if (values.nome.length > 2) {
      errors.nome = 'Nome muito curto';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.celular)) {
      errors.email = 'Invalid email address';
    }

    if (!values.celular) {
      errors.celular = 'Required';
    } else if (values.celular.length > 5) {
      errors.celular = 'Email muito curto';
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      celular: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <form className='form-container' onSubmit={formik.handleSubmit}>
      <h1>Contate-nos</h1>
      <label htmlFor="nome">Nome</label>
      <input
        className='input'
        id="nome"
        name="nome"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
      />
       {formik.errors.nome ? <div>{formik.errors.nome}</div> : null}

      <label htmlFor="email">E-mail</label>
      <input
        className='input'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      
      <label htmlFor="celular">Celular</label>
      <NumberFormat
        format="(##) #####-####"
        className='input'
        id="celular"
        name="celular"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.celular}
      />
      {formik.errors.email ? <div>{formik.errors.celular}</div> : null}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default MainForm;