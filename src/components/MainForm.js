import React from 'react';
import { useFormik } from 'formik';
import './MainForm.css';
import NumberFormat from 'react-number-format';
import * as Yup from 'yup';



function MainForm() {

  const phoneMask = /^(\([0-9]{2}\))\s([0-9]{1})?([0-9]{4})-([0-9]{4})$/;

  const cpfMask = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;


  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      celular: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({

      nome: Yup.string('Insira o Nome corretamente')
      .min(2, 'Preencha mais de um caractere')
      .required('Nome Obrigatório'),
      email: Yup.string()
      .email('Insira o E-mail corretamente')
      .required('E-mail Obrigatório'),
      celular: Yup.string()
      .matches(phoneMask, 'Celular não é valido')
      .required('Celular é obrigatório'),    
    }),
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
        format={'(##) #####-####'}
        className='input'
        id="celular"
        name="celular"
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.celular}
      />
      {formik.errors.celular ? <div>{formik.errors.celular}</div> : null}

      <button type="submit">Enviar</button>
    </form>
  )
}

export default MainForm;