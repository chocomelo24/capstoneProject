<template>
<div class="foot-section container-fluid">
<div class="footer-content">
     <!-- <div class="footer-about">
      <p> About JLine Couture</p> 
    <p>Jline by Jaclyn is a local online clothing women's fashion boutique. At Jline, we strive to provide high-quality couture at affordable prices to suite the taste and lifestyle of our clients. A tailor-made experience each time!</p> 
    </div> -->
    <div class="footer-details">
 <div>
      <i class="fa fa-phone"></i>
      <p> (+27) 72 851 2680 </p>
    </div>
     <div>
      <i class="fa fa-envelope"></i>
      <p><span>jlinecouture@gmail.com 
        </span></p>
         <p class="name"> JLine Couture &copy; 2022</p>
    </div>
</div>
</div>
</div>
    <!-- <v-Footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About JLine Couture</span> Jline by Jaclyn is a local online clothing women's fashion boutique. At Jline, we strive to provide high-quality couture at affordable prices to suite the taste and lifestyle of our clients. A tailor-made experience each time!
    </p>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Pieter Wenning Cres Woodlands 7785
</span> Cape Town, South Africa</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+27) 72 851 2680
    </p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><span>jlinecouture@gmail.com 
        </span></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <div class="logo"><img src="https://i.postimg.cc/JzDWMMDW/j-line-logo.jpg" alt="logo"></div>
   
    <p class="name"> JLine Couture &copy; 2022</p>
  </div>
</v-Footer> -->
</template>

<script>
export default {
    name: "Footer",
};
</script>

 <style scoped>
.foot-section{
    width: 100%;
    bottom: 0;
   background-image: url("../assets/glitter logo.jpg");
}

.footer-details{
    display: flex;
    justify-content: space-evenly;
}


.footer {
background-image: url("../assets/glitter logo.jpg");
  width: 100%;
  text-align: left;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  /* padding: 50px; */
  /* margin-top: 50px; */
}

.footer-details[data-v-40ab164b] {
    display: flex;
    justify-content: space-evenly;
    margin-top: 5rem;
}
.footer .footer-left,
.footer .footer-center,
.footer .footer-right {
  display: inline-block;
  vertical-align: top;
}


/* footer left*/

.footer .footer-left {
  width: 33%;
  padding-right: 15px;
}

.footer .about {
  line-height: 20px;
  color: black;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer .about span {
  display: block;
  color: #0a0909;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer .icons {
  margin-top: 25px;
}

.footer .icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: black;
  text-align: center;
  line-height: 35px;
  margin-right: 3px;
  margin-bottom: 5px;
}


/* footer center*/

.footer .footer-center {
  width: 30%;
}

.footer .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer .footer-center p {
  display: inline-block;
  color: black;
  vertical-align: middle;
  margin: 0;
}

.footer .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer .footer-center p a {
  color: black;
  text-decoration: none;
}


/* footer right*/

.footer .footer-right {
  width: 35%;
}

.footer h2 {
  color: black;
  font-size: 36px;
  font-weight: normal;
  margin: 0;
}

.footer h2 span {
  color: black;
}

.footer .menu {
  color: black;
  margin: 20px 0 12px;
  padding: 0;
}

.footer .menu a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer .menu a:hover {
  color: pink;
}

.footer .name {
  color: black;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

@media (max-width: 767px) {
  .footer {
    font-size: 14px;
  }
  .footer .footer-left,
  .footer .footer-center,
  .footer .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .footer .footer-center i {
    margin-left: 0;
  }
}
</style>