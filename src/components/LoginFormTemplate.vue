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

    export default{
        

        methods: {
          validate () {
            this.$refs.form.validate();
            this.$emit("setLoginDetails", this.userinfo);
          },
          reset () {
            this.$refs.form.reset()
          },
        },


        data(){
            return {
              userinfo:{
                username: '',
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
                   
            }     
        }
    };

</script>

<style>
  #containerBox{
    max-width: 420px;
    margin: auto  ;
  }
</style>