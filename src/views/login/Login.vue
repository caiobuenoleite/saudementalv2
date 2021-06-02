<style src="./style.scss" lang="scss" scoped></style>

<template>
  <section class="login">
    <div class="form">
      <div class="title">PLENI - Saúde Mental</div>
      <b-form-select v-model="business" :options="businessList"></b-form-select>

      <b-button variant="success" @click="actLogin">Acessar</b-button>
    </div>
  </section>
</template>

<script>
import act from "./actions.js";

export default {
  name: "Login",
  components: {},

  data() {
    return {
      business: null,
      businessList: [],
    };
  },

  mounted() {
    act.getBusinessList((list) => {
      this.businessList = list;
    });
  },

  methods: {
    actLogin() {
      if (!this.business) {
        return;
      }
      this.$router.push({ name: "Main", params: { business: this.business } });
    },
  },
};
</script>
