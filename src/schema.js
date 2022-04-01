import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string('Insira o Nome corretamente').min(2).required('Nome Obrigatório'),
    email: Yup.string().email('Insira o E-mail corretamente').required('E-mail Obrigatório'),
});
