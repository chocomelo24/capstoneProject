<template>
<section class="edit">
<div class="login">
<div class="box-form">
	<div class="left">
		<div class="overlay">
		<img class="image" src="https://i.postimg.cc/65LBJYtn/login.png">
		</div>
	</div>
	
	
		<div class="right">
		<h5>Login</h5> 
		<div class="inputs">
			<input type="email" v-model="email" placeholder="Email">
			<br>
			<input type="password" v-model="password" placeholder="password">
		</div>
			
			<br><br>
			
		<div class="remember-me--forget-password">
				<!-- Angular -->
			<p>forget password?</p>
		</div>
			
			<br>
			<button @click="login" >Login</button>
      <input type="password" required v-model="password"/>
	</div>
	
</div>
</div>
</section>
</template>
<script>

export default {
 data() {
  return{
    email: "",
    password: "",
    clicked: false,
  };
 },

computed: {
  user() {
    return this.$store.state.user;
  },
},
methods: {
  login(e) {
    e.preventDefault();
    this.clicked = true;
    const payload = {
      email: this.email,
      password: this.password,
    };
    this.$store.dispatch("login", payload);
     },

    reset() {
      this.clicked = false;
    },
  },
};
</script>


<style scoped>
/* @charset "UTF-8"; */
.edit{
  height: 100vh;
}
body {
  background-image: linear-gradient(135deg, #ffb2bb 10%, #ff5b6f 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: "Open Sans", sans-serif;
  color: #333333;
}

a{
  font-size: 18px;
}

.overlay{
   display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}

.box-form {
  margin: 0 auto;
  width: 90%;
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex: 1 1 100%;
  align-items: stretch;
  justify-content: space-between;
  box-shadow: 0 0 20px 6px white;
  margin-top: 50px;
}
@media (max-width: 980px) {
  .box-form {
    flex-flow: wrap;
    text-align: center;
    align-content: center;
    align-items: center;
  }

}
.left{
  width: 50%;
}
.right{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image{
  width: 500px;
  height: 400px;
}
.box-form div {
  height: auto;
}
.box-form .left {
  color: #ff5b6f;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.box-form .left .overlay {
  padding: 30px;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffb2bb 10%, #ff5b6f 100%);
  overflow: hidden;
  box-sizing: border-box;
}
.box-form .left .overlay h1 {
  font-size: 10vmax;
  line-height: 1;
  font-weight: 900;
  margin-top: 40px;
  margin-bottom: 20px;
}
.box-form .left .overlay span p {
  margin-top: 30px;
  font-weight: 900;
}
.box-form .left .overlay span a {
  background: #ff5b6f;
  color: #ff5b6f;
  margin-top: 10px;
  padding: 14px 50px;
  border-radius: 100px;
  display: inline-block;
  box-shadow: 0 3px 6px 1px white;
}
.box-form .left .overlay span a:last-child {
  background: #ffb2bb;
  margin-left: 30px;
}
.box-form .right { 
  padding: 40px;
  overflow: hidden;
}
@media (max-width: 980px) {
  .box-form .right {
    width: 100%;
  }
}
.box-form .right h5 {
  font-size: 6vmax;
  color: hotpink;
  font-family: emoji;
}
.box-form .right p {
  font-size: 14px;
  color: #ff5b6f ;
  font-family: emoji;
}
.box-form .right .inputs {
  overflow: hidden;
}
.box-form .right input {
  width: 100%;
  padding: 10px;
  margin-top: 25px;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 2px solid #ff5b6f ;
  font-family: emoji;
}
.box-form .right .remember-me--forget-password {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-form .right .remember-me--forget-password input {
  margin: 0;
  margin-right: 7px;
  width: auto;
}
.box-form .right button {
  /* float: right; */
  color: #ff5b6f;
  font-size: 16px;
  padding: 12px 35px;
  border-radius: 50px;
  display: inline-block;
  border: 0;
  font-family: emoji;
  outline: 0;
  box-shadow: 0px 4px 20px 0px #ff5b6f;
  background-image: linear-gradient(135deg, #ffb2bb 10%, #ff5b6f 100%);
}

label {
  display: block;
  position: relative;
  margin-left: 30px;
}

label::before {
  content: " ";
  position: absolute;
  font-family: FontAwesome;
  background: transparent;
  border: 3px solid #ffb2bb;
  border-radius: 4px;
  color: transparent;
  left: -30px;
  transition: all 0.2s linear;
}

label:hover::before {
  font-family: FontAwesome;
  content: " ";
  color: #fff;
  cursor: pointer;
}

label:hover::before .text-checkbox {
  background: #ff5b6f ;
}

label span.text-checkbox {
  display: inline-block;
  height: auto;
  position: relative;
  cursor: pointer;
  transition: all 0.2s linear;
}

label input[type=checkbox] {
  display: none;
}
</style>