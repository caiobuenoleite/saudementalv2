<style src="./Modal.scss" lang="scss" scoped></style>

<template lang="html">
  <section class="minha-modal">
    <div class="minha-modal-macro">
      <div class="title">{{ title }}</div>
      <div class="content">
        <slot name="container"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MinhaModal",

  props: {
    title: {
      type: String,
      required: true,
    },
  },

  components: {},

  mixins: [],

  data() {
    return {};
  },

  computed: {},

  watch: {},

  mounted() {},

  beforeDestroy() {},

  methods: {},
};
</script>
