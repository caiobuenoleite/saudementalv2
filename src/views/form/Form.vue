<style src="./style.scss" lang="scss" scoped></style>
<template>
  <section class="form-all">
    <div class="header">
      <div class="title">{{ business.id }}</div>
      <div class="act" @click="actReturnLogin">
        <div class="b-icon"><i class="fas fa-undo"></i></div>
      </div>
    </div>

    <div class="questions">
      <div class="q-card" v-for="q in questions" :key="`q-${q.title}`">
        {{ q.title }}
        <div class="respostas">
          <b-checkbox
            checked="anotando"
            class="r-card"
            v-for="r in respostas"
            :key="`r-${r.title}`"
            @change="uniqueCheck"
          >
            {{ r.title }}
          </b-checkbox>
        </div>
      </div>
    </div>
    <!-- 
    <b-form-group
      label="Button style radios with outline-primary variant and size lg"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        button-variant="outline-primary"
        size="lg"
        name="radio-btn-outline"
        buttons
      ></b-form-radio-group>
    </b-form-group> -->
  </section>
</template>

<script>
import act from "./actions.js";
export default {
  name: "FormAll",
  components: {},

  data() {
    return {
      anotando: [],
      business: { id: null },
      sector: null,
      questions: [{ title: null, id: null, group: null }],
      respostas: [{ title: null }],
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

    act.getRespostas((respostas) => {
      console.log("respostas", respostas);
      this.respostas = respostas;
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

  methods: {
    actReturnLogin() {
      this.$router.push("/");
    },
    uniqueCheck(e) {
      this.additional_grouped = [];
      if (e.target.checked) {
        this.additional_grouped.push(e.target.value);
      }
    },
  },
};
</script>
