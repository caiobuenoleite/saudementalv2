<style src="./style.scss" lang="scss" scoped></style>
<template>
  <section class="form-all">
    {{ questions }}
  </section>
</template>

<script>
import act from "./actions.js";
export default {
  name: "FormAll",
  components: {},

  data() {
    return {
      business: null,
      sector: null,
      questions: [],
    };
  },

  mounted() {
    const pRouter = this.$route.params;
    this.business = pRouter.business || null;
    this.sector = pRouter.sector || null;
    console.log("business", this.business);
    console.log("sector", this.sector);

    if (!this.business?.id || !this.sector?.id) {
      this.$router.push("/");
    }

    act.getQuestions((questions) => {
      console.log("questions", questions);
      this.questions = questions;
    });

    // const obj = {
    //   testeSave: true,
    //   respostaA: "42",
    //   filmePreferido: "StarWars",
    //   p1r4: "true",
    // };
    // act.postAnswers(obj, (call) => {
    //   console.log("retorno do push", call);
    // });
  },

  methods: {},
};
</script>
