import * as yup from 'yup';

export const registerFormSchemes = yup.object().shape({
	email: yup.string().email('Lutfen gecerli bir email firmati giriniz!').required('Bu alan zorunludur'),
	age: yup.number().positive().integer(),
	password: yup.string().required('sifre alani zorunludur'),
	confirmPassword: yup.string().required('sifre alani zorunludur').oneOf([yup.ref('password', yup.password)], 'Sifre eslesmiyor'),
	term: yup.boolean().required('Kullanici sozlesmesini kabul etmek zorundasiniz')
})