<style src="./style.scss" lang="scss" scoped></style>
<template>
  <section class="main">
    <div class="header">
      <div class="title">{{ business.id }}</div>
      <div class="act" @click="actReturnLogin">
        <div class="b-icon"><i class="fas fa-undo"></i></div>
      </div>
    </div>

    <div class="sectors">
      <div
        class="sec-card"
        v-for="item in sectorList"
        :key="`sec-${item.id}`"
        @click="actOpenForm(item)"
      >
        {{ item.id }}
      </div>
    </div>
  </section>
</template>

<script>
import act from "./actions.js";

export default {
  name: "Main",
  components: {},

  data() {
    return {
      business: { id: null },
      sectorList: [],
    };
  },

  mounted() {
    const pBusiness = this.$route.params;
    this.business = pBusiness.business || { id: null };

    if (!this.business?.id) {
      this.actReturnLogin();
    }

    if (this.business?.id) {
      act.getSectors(this.business.id, (list) => {
        this.sectorList = list;
      });
    }
  },

  methods: {
    actReturnLogin() {
      this.$router.push("/");
    },

    actOpenForm(sector) {
      this.$router.push({
        name: "Form",
        params: { business: this.business, sector: sector },
      });
    },
  },
};
</script>
