import React from 'react';
import { useFormik } from 'formik';
import './MainForm.css';
import NumberFormat from 'react-number-format';
import * as Yup from 'yup';

function MainForm() {

  const phoneMask = /^(\([0-9]{2}\))\s([0-9]{1})?([0-9]{4})-([0-9]{4})$/;

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      celular: '',
      genero: '',
      mensagem: '',
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
      mensagem: Yup.string('')
      .max(200, 'Limite de 200 caracteres'),
    }),
  });
  return (
    <form className='form-container' onSubmit={formik.handleSubmit}>
      <input
        placeholder='Seu Nome'
        className='input'
        id="nome"
        name="nome"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
      />
       {formik.errors.nome ? <div className='error'>{formik.errors.nome}</div> : null}

      <input
        placeholder='Email'
        className='input'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}

      <NumberFormat
        placeholder='Celular'
        format={'(##) #####-####'}
        className='input'
        id="celular"
        name="celular"
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.celular}
      />
      {formik.errors.celular ? <div className='error'>{formik.errors.celular}</div> : null}

    <div className='radio' >
      <input className='radio-input' type="radio" id="genero" name="genero" 
       onChange={formik.handleChange}
      value='Masculino'/>
      <label>Masculino</label>
    </div>

    <div className='radio' >
      <input className='radio-input' type="radio" id="genero" name="genero" 
       onChange={formik.handleChange}
      value='Feminino'/>
      <label>Feminino</label>
    </div>

    <div className='radio'>
      <input className='radio-input' type="radio" id="genero" name="genero" 
       onChange={formik.handleChange}
      value='Outro'/>
      <label>Outro</label>
    </div>
      
        <textarea name='mensagem'  type="text" id="mensagem"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mensagem} cols={40} rows={15}/>
        {formik.errors.mensagem ? <div className='error'>{formik.errors.mensagem}</div> : null}

        <button type="submit">Enviar</button>
    </form>
  )
}

export default MainForm;