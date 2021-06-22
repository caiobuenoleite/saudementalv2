<style src="./style.scss" lang="scss" scoped></style>
<template>
  <section class="pleni-radio-btn">
    <div
      class="btn-radio"
      :class="{ active: active === 'Sim' }"
      @click="actActive('Sim')"
    >
      <span>Sim</span>
    </div>

    <div
      class="btn-radio"
      :class="{ active: active === 'Não' }"
      @click="actActive('Não')"
    >
      <span>Não</span>
    </div>

    <div
      class="btn-radio"
      :class="{ active: active === 'Às vezes' }"
      @click="actActive('Às vezes')"
    >
      <span>Às vezes</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "PleniRadioBtn",
  components: {},

  data() {
    return {
      active: null,
    };
  },

  mounted() {},

  methods: {
    actActive(titleBtn) {
      // console.log("titleBtn", titleBtn);
      this.active = titleBtn;
      this.$emit("input", titleBtn);
    },
  },
};
</script>
