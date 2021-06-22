<style src="./style.scss" lang="scss" scoped></style>

<template>
  <section class="login">
    <div class="form">
      <b-img :src="plenilogo" />
      <div class="title">PLENI - Saúde Mental</div>
      <b-form-select v-model="business" :options="businessList"></b-form-select>
      <b-input
        type="password"
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
      uid: null,
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
      if (this.password === this.business.password) {
        const max = 999999;
        const min = 1;
        const rdn = Math.round(Math.random() * (max - min) + min);
        const time = new Date().getTime();
        this.uid = `${time}${rdn}`;
        this.$router.push({
          name: "Main",
          params: { business: this.business, uid: this.uid },
        });
      } else {
        alert("Senha incorreta!");
      }
    },
  },
};
</script>
