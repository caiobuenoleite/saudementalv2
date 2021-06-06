<style src="./style.scss" lang="scss" scoped></style>

<template>
  <section class="login">
    <div class="form">
      <b-img :src="plenilogo" />
      <div class="title">PLENI - Saúde Mental</div>
      <b-form-select v-model="business" :options="businessList"></b-form-select>
      <b-input
        :id="`type-${password}`"
        :type="password"
        v-model="password"
        placeholder="Password"
      ></b-input>
      <b-button variant="success" @click="actLogin">Acessar</b-button>
    </div>
  </section>
</template>

<script>
import act from "./actions.js";
import plenilogo from "../../assets/pleni_logo.png";

export default {
  name: "Login",
  components: {},

  data() {
    return {
      password: "",
      plenilogo: plenilogo,
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
