<template>
  <div id="containerBox">
      <v-card-text>
          <div id="app">
            <v-app id="inspire">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="userinfo.username"
                  :counter="10"
                  :rules="nameRules"
                  placeholder="Name"
                  required
                ></v-text-field>
            
                <v-text-field
                  v-model="userinfo.email"
                  :rules="emailRules"
                  placeholder="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="userinfo.password"
                  :rules="passwordRules"
                  placeholder="Password"
                  required
                ></v-text-field>
              
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Submit
                </v-btn>
            
                <v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
                >
                  Reset Form
                </v-btn>
            
              </v-form>
            </v-app>
          </div>
      </v-card-text>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        userinfo:{
          username: '',
          email: '',
          password: '',
        },     
         
    
      valid: true,

      passwordRules: [
        v => !!v || 'Password is required',
      ],
      
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };  
    },
    methods: {
      validate () {
        this.$refs.form.validate();
        this.$emit("setRegisterDetails", this.userinfo);
      },
      reset () {
        this.$refs.form.reset()
      },
    },
}
</script> 

<style>
  #containerBox{
    max-width: 420px;
    margin: auto  ;
  }
</style>

<!-- 
<style>


   label {
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  } 
 input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  } 
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }

  .v-application--wrap{
    
  }

</style> -->
