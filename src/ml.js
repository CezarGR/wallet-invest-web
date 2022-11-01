import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'pt',
  //save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('en').create({
      password: 'Password',
      confirmPassword: 'Confirm Password',
      email: 'Email',
      name: 'Name',
      document: 'Document',
      login: 'Login',
      language: 'Language',
      register: 'Register',
      save: 'Save',
      validateDocumentSuccess: 'Document {document} is valid',
      validateDocumentError: 'Document {document} is invalid',
    }),

    new MLanguage('pt').create({
      password: 'Senha',
      confirmPassword: 'Confirme a senha',
      email: 'E-mail',
      name: 'Nome',
      document: 'Documento',
      login: 'Entrar',
      language: 'Idioma',
      register: 'Cadastrar-se',
      save: 'Salvar',
      validateDocumentSuccess: 'Documento {document} é válido',
      validateDocumentError: 'Documento {document} é inválido',
    })
  ]
})