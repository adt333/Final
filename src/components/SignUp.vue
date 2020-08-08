<template>
  <v-app>
  <v-tabs>
    <v-tab>{{title}}</v-tab>
  </v-tabs>
  <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="Address1"
              :rules="addRules"
              :counter="100"
              label="Address Line 1"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="Address2"
              :rules="addRules"
              :counter="100"
              label="Address Line 2"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="City"
              :rules="cityRules"
              :counter="20"
              label="City"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="State"
              :rules="stateRules"
              :counter="20"
              label="State"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="Zipcode"
              :rules="zipcodeRules"
              :counter="6"
              label="Zipcode"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="text-center">
    <v-btn to="/ClickMe" rounded color="primary" dark>Enroll</v-btn>
    </div>
  </v-app>
</template>

<script>
import router from '../router.js'

export default {
  name: 'SignUp',
  data: () => ({
    title: 'Register',
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    Address1: '',
    Address2: '',
    addRules: [
      v => !!v || 'Adress is required',
      v => v.length <= 100 || 'Address  must be less than 100 characters'
    ],
    City: '',
    cityRules: [
      v => !!v || 'City is required',
      v => v.length <= 20 || 'City  must be less than 20 characters'
    ],
    State: '',
    stateRules: [
      v => !!v || 'State is required',
      v => v.length <= 20 || 'State  must be less than 20 characters'
    ],
    zipcode: '',
    zipcodeRules: [
      v => !!v || 'Zipcode is required',
      v => v.length === 6 || 'Zipcode should have 6 digits'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    enroll: function (event) {
      router.push({ name: 'ClickMe' })
    }
  }
}
</script>
