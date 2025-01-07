import React from 'react';
import { useFormik } from 'formik';
import {registerFormSchemes} from '../schemes/registerFormSchemes';



const Form = () => {
	const submit = () => {
		setTimeout((values, action)=> {
		aler('Form gonderme islemi basarili')
		}, 2000)
	}
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email:"",
			age:"",
			password:"",
			confirmPassword:"",
			term:""
		},
		validationSchema: registerFormSchemes,
		onSubmit: submit
	})
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder='Email giriniz'
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
            <label htmlFor="age">Yaş</label>
            <input type="number" id="age" name="age" placeholder='Yaşınızı giriniz'
            value={values.age}
            onChange={handleChange}
            />
            {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
            <label htmlFor="password">Şifre</label>
            <input type="password" id="password" name="password" placeholder='Şifre giriniz'
            value={values.password}
            onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
            <label htmlFor="confirmPassword">Şifre tekrar giriniz</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Şifreyi tekrar giriniz'
            value={values.confirmPassword}
            onChange={handleChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div className='checkbox-wrapper'>
            <input type="checkbox" name="check" id="check" 
            value={values.term}
            onChange={handleChange}
            />
            <label>Kullanıcı sözleşmesini kabul ediyorum</label>
        </div>
            {errors.term && <p>{errors.term}</p>}
            <button type="submit">Kaydet</button>
    </form>
  )
}

export default Form