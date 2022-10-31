import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'pt',
  //save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('en').create({
      password: 'Password',
      email: 'Email',
      login: 'Login',
      language: 'Language',
      register: 'Register'
    }),

    new MLanguage('pt').create({
      password: 'Senha',
      email: 'E-mail',
      login: 'Entrar',
      language: 'Idioma',
      register: 'Cadastrar-se',
    })
  ]
})