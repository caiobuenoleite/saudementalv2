<style src="./style.scss" lang="scss" scoped></style>
<template>
  <section class="form-all">
    <div class="header">
      <div class="title">{{ business.id }} - {{ sector ? sector.id : "" }}</div>
      <div class="act" @click="actReturn">
        <div class="b-icon"><i class="fas fa-undo"></i></div>
      </div>
    </div>

    <div class="questions">
      <div class="q-card" v-for="(q, index) in questions" :key="`q-${index}`">
        {{ index + 1 }}) {{ q.title }}
        <div class="respostas">
          <PleniRadioBtn @input="(data) => actPleniRadioBtn(data, q)" />
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
import PleniRadioBtn from "../../components/pleni-radio-btn/PleniRadioBtn";

import act from "./actions.js";
export default {
  name: "FormAll",
  components: {
    PleniRadioBtn,
  },

  data() {
    return {
      score: { questionario: [{ questao: null, resposta: null }] },
      // score: [
      //   {
      //     questionario: [{ questao: null, resposta: null }],
      //     setsectoror: null,
      //     business: null,
      //   },
      // ],
      business: { id: null },
      sector: null,
      questions: [{ title: null, id: null, group: null }],
    };
  },

  mounted() {
    const pRouter = this.$route.params;
    this.business = pRouter.business || null;
    this.sector = pRouter.sector || null;
    console.log("business", this.business);
    console.log("sector", this.sector);

    this.score.business = pRouter.business;
    this.score.setor = pRouter.sector;
    console.log("score", this.score);

    if (!this.business?.id || !this.sector?.id) {
      this.$router.push("/");
    }

    act.getQuestions((questions) => {
      console.log("questions", this.questions);
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
    actReturn() {
      this.$router.push({ name: "Main", params: { business: this.business } });
    },
    uniqueCheck(e) {
      this.additional_grouped = [];
      if (e.target.checked) {
        this.additional_grouped.push(e.target.value);
      }
    },

    actPleniRadioBtn(data, question, score) {
      console.log("data do radio", data);
      console.log("questão do radio", question);

      score = act.getScore(data, question.id, score);
      console.log("score do radio");
      // ATUALIZAR???
      // aqui que salva no firebase as respostas e o score
      // const obj = {}
      // act.postAnswers(obj,(res)=>{})
      console.log("*****************");
    },
  },
};
</script>
