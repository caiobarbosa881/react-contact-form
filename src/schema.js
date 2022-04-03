import * as Yup from 'yup';

const celular = "^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$";
const cpf = "([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})";

export default Yup.object().shape({
    name: Yup.string('Insira o Nome corretamente').min(2, 'Preencha mais de um caractere').required('Nome Obrigatório'),
    email: Yup.string().email('Insira o E-mail corretamente').required('E-mail Obrigatório'),
    celular: Yup.string().matches(celular, 'Celular não é valido').required('Celular é obrigatório'),
    cpf: Yup.string().matches(cpf, 'CPF é não é valido').required('CPF é obrigatório'),
    cidade: Yup.string().required('Cidade é Obrigatória'),
});
