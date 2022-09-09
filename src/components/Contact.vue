<template>
   <section class="contact-page-sec container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-map-marked"></i>
              </div>
              <div class="contact-info-text">
                <h2>Address</h2>
                <span>Pieter Wenning Cres Woodlands 7785</span> 
                <span>Cape Town, South Africa</span> 
              </div>
            </div>            
          </div>          
        </div>          
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <h2>E-mail</h2> 
                <span>jlinecouture@gmail.com</span>
              </div>
            </div>            
          </div>                
        </div>                
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="contact-info-text">
                <h2>office time</h2>
                <span>Mon - Thu  9:00 am - 4.00 pm</span>
                <span>Thu - Mon  10.00 pm - 5.00 pm</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="contact-page-form" method="post">
            <h2>Get in Touch</h2> 
            <form  action="https://formspree.io/f/xrgdeowq"
  method="POST">
              <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Your Name" name="name"/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required/>
                </div>
              </div>                              
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone"/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div class="col-md-12 message-input">
                <div class="single-input-field">
                  <textarea  placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>                                                
              <div class="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>
            </form>   
          </div>      
        </div>
        <div class="col-md-4">        
          <div class="contact-page-map container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.764100543105!2d18.601747399999997!3d-34.024265699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc45eeeecd6a3d%3A0x46c56ee921981c96!2sPieter%20Wenning%20Cres%2C%20Woodlands%2C%20Cape%20Town%2C%207785!5e0!3m2!1sen!2sza!4v1662726962577!5m2!1sen!2sza" width="300" height="450" style="border:0; color:pink;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>          
        </div>        
      </div>
    </div>
  </section> 
</template>
<script>
export default {}
</script>
<style scoped>
html .App{
    overflow-x: hidden;
}
     section {
            padding: 60px 0;
            min-height: 100vh;
        }
.contact-info {
  display: inline-block;
  width: 100%;
  text-align: center;
      margin-bottom: 10px;
}
.contact-info-icon {
margin-bottom: 15px;
}
.contact-info-item {
  background: pink;
  padding: 30px 0px;
}
.contact-page-sec .contact-page-form h2 {
  color: black;
  text-transform: capitalize;
  font-size: 22px;
  font-weight: 700;
}
.contact-page-form .col-md-6.col-sm-6.col-xs-12 {
  padding-left: 0;
}  
.contact-page-form.contact-form input {
  margin-bottom: 5px;
}  
.contact-page-form.contact-form textarea {
  height: 110px;
}
.contact-page-form.contact-form input[type="submit"] {
  background: pink;
  width: 150px;
  border-color: pink;
}
.contact-info-icon i {
  font-size: 48px;
  color: palevioletred;
}
.contact-info-text p{margin-bottom:0px;}
.contact-info-text h2 {
  color: black;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 10px;
}
.contact-info-text span {
  color: black;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  width: 100%;
}

.contact-page-form input {
  background: #f9f9f9 none repeat scroll 0 0;
  border: 1px solid #f9f9f9;
  margin-bottom: 20px;
  padding: 12px 16px;
  width: 100%;
  border-radius: 4px;
}

.contact-page-form .message-input {
display: inline-block;
width: 100%;
padding-left: 0;
}
.single-input-field textarea {
  background: #f9f9f9 none repeat scroll 0 0;
  border: 1px solid black;
  width: 100%;
  height: 120px;
  padding: 12px 16px;
  border-radius: 4px;
}
.single-input-fieldsbtn input[type="submit"] {
  background: pink none repeat scroll 0 0;
  color: pink;
  background: linear-gradient(135deg, #ffb2bb 10%, #ff5b6f 100%);
  font-weight: 600;
  padding: 10px 0;
  text-transform: capitalize;
  width: 150px;
  margin-top: 20px;
  font-size: 16px;
}
.single-input-fieldsbtn input[type="submit"]:hover{background:pink;transition: all 0.4s ease-in-out 0s;border-color:pink}
.single-input-field  h4 {
  color: #464646;
  text-transform: capitalize;
  font-size: 14px;
}
.contact-page-form {
  display: inline-block;
  width: 100%;
  margin-top: 30px;
}

.contact-page-map {
  margin-top: 36px;
}
.contact-page-form form {
    padding: 20px 15px 0;
}
</style>