<template>
  <div class="register-view">
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
          <v-btn class="button-register" color="primary" x-large to="/login">{{$ml.get('login')}}</v-btn>
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
    <v-row no-gutters style="height: 100%; width: 100%;" justify="center" aling="start">
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="4"
        xl="4"
        class="d-flex flex-column justify-center align-content-space-around align-center"
      >
      <h1>Wallet <span class="primary--text">Invest</span></h1>
      <v-form
        class="form-register"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          :dark="true"
          v-model="name"
          :label="$ml.get('name')"
          required
        ></v-text-field>

        <v-text-field
          :dark="true"
          v-model="email"
          :rules="emailRules"
          :label="$ml.get('email')"
          required
        ></v-text-field>

        <v-label
          :dark="true"
        >
          {{$ml.get('document')}}
        </v-label>
        
        <v-otp-input
          length="11"
          plain
          background-color="#ffffff00"
          :dark="true"
          v-model="document"
          @input="validateDocument(document)"
          @finish="validateDocumentFinished"
        ></v-otp-input>
        <v-overlay absolute :value="loading">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-overlay>

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

        <v-text-field
          :dark="true"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          color="#fff"
          v-model="confirmPassword"
          :rules="confirmPasswordRules"
          :label="$ml.get('confirmPassword')"
          required
          @click:append="showPassword = !showPassword"
        ></v-text-field>

        <v-btn class="button" color="primary" x-large v-text="$ml.get('register')"></v-btn>
      </v-form>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="2000"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>

  import { MLBuilder } from 'vue-multilanguage'

  export default {
    name: 'registerView',
    data: () => ({
      language: '',
      loading: false,
      snackbar: false,
      snackbarColor: '',
      text: '',
      items:[
        'Português',
        'Inglês'
      ],
      showPassword: false,
      valid: true,
      name: '',
      document: '',
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      confirmPassword: '',
      confirmPasswordRules: [
        v => !!v || 'Password is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }),
    computed: {
      mldocumentValidMessage () {
        return new MLBuilder('validateDocumentSuccess').with('document', this.document)
      },
      mldocumentInvalidMessage () {
        return new MLBuilder('validateDocumentError').with('document', this.document)
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
      },
      validateDocument(value) {
        let documentArray = value.split('');
        let lastDigit = documentArray.slice(-1);
        const isNumber = !isNaN(lastDigit) && parseInt(Number(lastDigit)) == lastDigit && !isNaN(parseInt(lastDigit, 10));

        if (!isNumber && lastDigit.length != 0) {
          let element = document.getElementsByClassName(`otp-field-box--${documentArray.length - 1}`)[0];
          element.style.color = '#ff4242';
        }
      },
      validateDocumentFinished(document) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false
          this.snackbarColor = (document.length > 11 || /[a-zA-Z]/.exec(document)) ? 'warning' : 'success'
          this.text = (document.length > 11 || /[a-zA-Z]/.exec(document)) ? this.$ml.get('documentInvalidMessage') : this.$ml.get('documentValidMessage')
          this.snackbar = true
        }, 3500);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .register-view {
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

  p {
    color: rgba(255, 255, 255, 0.7);
  }

  .input-value {
    * {
      border: 1px solid white !important;
      color: white !important;
    }
  }

  .form-register {
    width: 90%;
    height: auto;
  }

  .v-text-field__slot {
    background-color: aqua;
  }

  .v-input {
    color: aquamarine !important;
  }

  .form-register .button {
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
    width: 160px;
  }
</style>
