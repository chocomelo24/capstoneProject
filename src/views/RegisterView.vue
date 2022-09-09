<template>
  <div id="main">
    <div class="container">
      <div class="row justify-content-center">
        <div id="registerzone" class="col-lg-6 col-md-6 col-sm-6">
          <h2>Register Your Account</h2>
          <div id="cardzone" class="card text-light">
            <div class="card-title text-center text-light border-bottom">
              <h2>Register</h2>
            </div>
            <div class="card-body text-center text-light">
              <form method="POST" @submit.prevent="register">
                <div class="mb-3">
                  <label for="full_name" class="form-label">First Name</label>
                  <input
                    v-model="full_name"
                    type="text"
                    class="form-control"
                    name="full_name"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label"
                    >Phone Number</label
                  >
                  <input
                    v-model="phone"
                    type="text"
                    class="form-control"
                    name="phone"
                    maxlength="10"
                  />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    name="password"
                  />
                </div>
                <div class="mb-3">
                  <label for="user_type" class="form-label">User</label>
                  <input
                    v-model="user_type" readonly
                    type="user_type"
                    class="form-control"
                    name="user_type"
                  />
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-grad">Register
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      full_name: null,
      email: null,
      phoneNo: null,
      password: null,
      cart: null,
      billing_address: 'Cape Town',
      country: 'SA',
      default_shipping_address: 'Park Street',
      user_type: "user",
    };
  },
  methods: {
    register() {
      const payload ={
        full_name: this.full_name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        user_type : this.user_type,
        billing_address : this.billing_address,
        country : this.country,
        default_shipping_address : this.default_shipping_address
      };
      this.$store.dispatch('register', payload);
    },
  },
};

  

</script>

<style scoped>
a{
  text-decoration: none;
}

h2{
    color: black;
}

label{
    color: black;
}

#main {
  background-image: linear-gradient(135deg, #ffb2bb 10%, #ff5b6f 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  overflow-x: hidden;
  padding: 100px 0;
  text-align: center;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
  135deg, #ffb2bb 10%, #ff5b6f 100%
  );
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  text-decoration: none;
}

a:hover{
  color: white;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
#registerzone{
    padding: 0 0 70px 0
}
#cardzone {
  padding: 20px 50px;
  border-radius: 20px;
  background-color: transparent;
  box-shadow: 0 0 20px #eee;
}

</style>