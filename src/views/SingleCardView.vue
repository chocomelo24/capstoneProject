<template>
<section>
  <div class="SingleCardView">
    <div v-if="product">
      <div v-for="item in product" :key="item.product_id">
        
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
        <img v-bind:src="item.image" class="img-fluid" />
        <div class="card-body">
            <p class="card-text-products">Name:{{ item.name}}</p>
            <p class="card-text-products">Price:R{{ item.price}}</p>
            <p class="card-text-products">Size:{{ item.size}}</p>
            <p class="card-text-products">Description:{{ item.descriptions}}</p>
        </div>
         </div>
          <div class="flip-card-back">
            <img v-bind:src="item.thumbnail" class="img-fluid" />
              </div>
            </div>
          </div>
       
      </div>
    </div>
  </div>
  </section>
</template>
<script>
export default {
  props: ["id"],
data() {
    return {
      product: null,
    };
  },

  mounted() {
    fetch(
      "https://connnection-test.herokuapp.com/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
      });
  },
//   computed: {
//       products() {
//           return this.item.products;
//     },
//   },
};

</script>
<style>
.SingleCardView{
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 10rem;
}

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
  background-color: #bbb;
  color: black;
}
/* Style the back side */
.flip-card-back {
  background-color: #dab49d;
  color: white;
  transform: rotateY(180deg);
}
/* end of flip card */

.card-text-products{
  font-family: emoji;
  font-size: 20px;
}
/* .col {
  display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
} */

.img-fluid {
    max-width: 100%;
    height: 100%;
}

 /* .px-5 {
    padding-right: 3rem!important;
    padding-left: 14rem!important;
}  */
/* .row {
    --bs-gutter-x: 17.5rem;2
    --bs-gutter-y: 0;
    } */
</style>