import React from 'react'

const Form = () => {
  return (
    <form>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder='Email giriniz'/>
        </div>
        <div>
            <label htmlFor="age">Yaş</label>
            <input type="number" id="age" name="age" placeholder='Yaşınızı giriniz'/>
        </div>
        <div>
            <label htmlFor="password">Şifre</label>
            <input type="password" id="password" name="password" placeholder='Şifre giriniz'/>
        </div>
        <div>
            <label htmlFor="confirmPassword">Şifre tekrar giriniz</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Şifreyi tekrar giriniz'/>
        </div>
        <div className='checkbox-wrapper'>
            <input type="checkbox" name="check" id="check" />
            <label>Kullanıcı sözleşmesini kabul ediyorum</label>
        </div>
        <div>
            <button>Kaydet</button>
        </div>
    </form>
  )
}

export default Form