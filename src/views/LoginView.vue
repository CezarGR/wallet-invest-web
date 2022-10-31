<template>
  <div class="login-view">
    <v-container fluid >
      <v-row class="d-flex align-baseline justify-end" style="height: auto; width: 100%;" >
        <v-col
          class="d-flex"
          xs="6"
          sm="6"
          md="4"
          lg="3"
          xl="3"
        >
          <v-btn class="button-register" color="primary" x-large>{{$ml.get('register')}}</v-btn>
          <v-select
            class="select"
            :items="items"
            :label="$ml.get('language')"
            outlined
            :dark="true"
            v-model="language"
            @input="selectLanguage()"
          ></v-select>
        </v-col> 
      </v-row>
    </v-container>
    <v-row no-gutters style="height: auto; width: 100%;" align="center" justify="center">
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="4"
        xl="4"
        class="d-flex flex-column justify-center align-center"
      >
      <h1>Wallet <span class="primary--text">Invest</span></h1>
      <v-form
        class="form-login"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          :dark="true"
          v-model="email"
          :rules="emailRules"
          :label="$ml.get('email')"
          required
        ></v-text-field>

        <v-text-field
          :dark="true"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          color="#fff"
          v-model="password"
          :rules="passwordRules"
          :label="$ml.get('password')"
          required
          @click:append="showPassword = !showPassword"
        ></v-text-field>

        <v-btn class="button" color="primary" x-large v-text="$ml.get('login')">Entrar</v-btn>
      </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  import { MLBuilder } from 'vue-multilanguage'

  export default {
    name: 'LoginView',
    data: () => ({
      language: '',
      items:[
        'Português',
        'Inglês'
      ],
      showPassword: false,
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }),
    computed: {
      mlmyMessage () {
        return new MLBuilder('login').with('f', this.friends).with('l', 406)
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      selectLanguage() {
        if (this.language === 'Português') {
          this.$ml.change('pt')
        } else {
          this.$ml.change('en')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-view {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;

    background-color: #192244;
  }

  h1 {
    text-align: center;
    color: #ffffff;
    margin-bottom: 100px;
  }

  .input-value {
    * {
      border: 1px solid white !important;
      color: white !important;
    }
  }

  .form-login {
    width: 90%;
    height: auto;
  }

  .v-text-field__slot {
    background-color: aqua;
  }

  .v-input {
    color: aquamarine !important;
  }

  .form-login .button {
    width: 100%;
    margin-top: 30px;
  }

  .container-actions {
    margin: 10px;
  }

  .select {
    width: 30px;
  }

  .button-register {
    margin: 0px 10px;
  }
</style>
