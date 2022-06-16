<template>
  <div id="app">
    <NavBarTemplate :isLoggedIn="isLoggedIn" @setParentComponentDetails="setDetailsForComponent"/>
    <div v-if="!isLoggedIn">
        <div v-if="RegisterLogin == 1">
          <RegisterFormTemplate  @setRegisterDetails="setRegisterDetails"/>
        </div>
        <div v-if="RegisterLogin == 2">
          <LoginFormTemplate   @setLoginDetails="setLoginDetails"/>
        </div>
    </div>
    <div v-else>
      <ToDoList />
    </div>
    
    
     
    
    
  </div>
</template>

<script>
import NavBarTemplate from "./components/Navbar.vue";
import RegisterFormTemplate from "./components/RegisterFormTemplate.vue";
import LoginFormTemplate from "./components/LoginFormTemplate.vue";
import ToDoList from "./components/ToDoList.vue";
export default {
  name: "App",
  components: {
    NavBarTemplate,
    RegisterFormTemplate,
    LoginFormTemplate,
    ToDoList,
  },
  methods: {    
      setDetailsForComponent(LoginRegisterId) {  
        this.RegisterLogin= LoginRegisterId;
        if (LoginRegisterId == 2 && this.isLoggedIn){
            this.isLoggedIn = false;
        } 
      },  
      setRegisterDetails(userinfo){
        var correctData = true;
        for (var u in this.users){
          if (this.users[u].username == userinfo.username){
            correctData = false;
            alert("Username already used");
            break;
          }
        }
        if(correctData){
          let newUser = {
              username: userinfo.username,
              password: userinfo.password,
              email: userinfo.email,
              loggedIn : false,
            }
            this.users.push(newUser);
        } 
      },

      setLoginDetails(userinfo){
        var correctData = false;
        for (var u in this.users){
          if (this.users[u].username == userinfo.username && this.users[u].password == userinfo.password ){
            correctData = true;
            // alert("Username already used");
            this.isLoggedIn = true;
            break;
          }
        }
        if(!correctData){
          alert("Wrong username or password");
        }
      }
   },

  data() {
      return{
        RegisterLogin : 1,
        isLoggedIn : false   ,
        users: [
          {
            username : "shubh",
            password : "shubh",
            email : "abc@email.com",
            loggedIn : false,
          }
      ],
    };
  }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background: white;
}
</style>