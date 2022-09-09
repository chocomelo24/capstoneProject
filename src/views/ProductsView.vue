<template>
<section>
  <input
  class="SB"  
  type="text"
  v-model="search"
  placeholder="Search by category {Women or Kids}"
  />
  <div class="row">
  <ProductsCard
  v-for="product in filteredproducts"
  :key="product.id"
  :product="product"
  ></ProductsCard>
  </div>
  </section>
</template>

<script>
import ProductsCard from "../components/ProductsCard.vue";
export default {
    components: { ProductsCard },
data() {
    return {
        search: "",
        products: [],
    };
},

computed: {
    filteredproducts() {
        return this.$store.state.products?.filter((product) => {
            return product.category
            ?.toLowerCase()
            .includes(this.search.toLowerCase());
        
        });
    },
            products() {
                return this.$store.state.products;
            },
},
// components: {ProductCard},
mounted() {
    this.$store.dispatch("getproducts");
},
};
</script>

<style scoped>
.row {
    margin-top: 10px;
}
.SB {
    margin-top: 53px;
    margin-left: 42vw;
    font-size: 21px;
    border: 0;
    outline: 0; 
    border-bottom: 2px solid black;
    width: 18%;
    font-size: 20px;
    background: transparent;
    color: black;
}

</style>