<template>

        <div class="item col-md-6 py-5 my-5 px-5 ">
    <router-link 
    :to="{ name: 'SingleCardView', params: { id: product.product_id } }"
    class="router-text"
    >
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
        <img :src="product.image" class="img-fluid" />
        <div class="card-body">
            <p class="card-text-products">{{ product.name}}</p>
        </div>
         </div>
          <div class="flip-card-back">
            <img :src="product.thumbnail" class="img-fluid" />
              </div>
            </div>
          <div></div>
          </div>
    </router-link>
        </div>
    
</template>

<script>
export default {
props: ["product"],
};
</script>

<style scoped>
/* Flip card css */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px 1px 1px solid #dab49d;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: pink;
  color: black;
  font-family: emoji;
}
/* Style the back side */
.flip-card-back {
  background-color: pink;
  color: palevioletred;
  transform: rotateY(180deg);
}
/* end of flip card */

.card-text-products{
  font-family: emoji;
  font-size: 20px;
  
}

.img-fluid {
    max-width: 100%;
    height: 100%;
}
 .px-5 {
    padding-right: 3rem!important;
    padding-left: 14rem!important;
} 
.row {
    --bs-gutter-x: 17.5rem;
    --bs-gutter-y: 0;
    }
</style>