import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string('Insira o Nome corretamente').min(2, 'Preencha mais de um caractere').required('Nome Obrigatório'),
    email: Yup.string().email('Insira o E-mail corretamente').required('E-mail Obrigatório'),
    celular: Yup.string().required('Celular é Obrigatório'),
    cpf: Yup.string().required('CPF é Obrigatório'),
    cidade: Yup.string().required('Cidade é Obrigatória'),
});
