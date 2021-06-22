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
    <div class="salvar">
      <b-button
        class="btn_salvar"
        type="submit"
        variant="primary"
        @click="openModal"
        >Salvar</b-button
      >
      <modal-direction v-model="modalOpen"></modal-direction>
    </div>
  </section>
</template>

<script>
import ModalDirection from "../../components/modal_salvar/Modal";
import PleniRadioBtn from "../../components/pleni-radio-btn/PleniRadioBtn";

import act from "./actions.js";
export default {
  name: "FormAll",
  components: {
    PleniRadioBtn,
    ModalDirection,
  },

  data() {
    return {
      modalOpen: false,
      score: [],
      business: { id: null },
      uid: null,
      sector: null,
      questions: [{ title: null, id: null, group: null }],
    };
  },

  mounted() {
    const pRouter = this.$route.params;
    this.business = pRouter.business || null;
    this.sector = pRouter.sector || null;
    this.uid = pRouter.uid || null;
    // console.log("business", this.business);
    // console.log("sector", this.sector);
    // console.log("uid", this.uid);

    this.score.business = pRouter.business;
    this.score.setor = pRouter.sector;
    // console.log("score", this.score);

    if (!this.business?.id || !this.sector?.id || this.uid === null) {
      this.$router.push("/");
    }

    act.getQuestions((questions) => {
      // console.log("questions", this.questions);
      this.questions = questions;
    });

    act.getRespostas((respostas) => {
      // console.log("respostas", respostas);
      this.respostas = respostas;
    });
  },

  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    actReturn() {
      this.$router.push({
        name: "Main",
        params: { business: this.business, uid: this.uid },
      });
    },
    uniqueCheck(e) {
      this.additional_grouped = [];
      if (e.target.checked) {
        this.additional_grouped.push(e.target.value);
      }
    },

    actPleniRadioBtn(answer, question) {
      // console.log("answer do radio", answer);
      // console.log("questão do radio", question);

      let resp = 2;
      switch (answer) {
        case "Sim":
          resp = 1;
          break;
        case "Não":
          resp = 0;
          break;
      }

      // se for por cada resposta, entao o firebase sera como update
      const ref = `respostas_coletadas/${question.group}/${this.business.id}/${this.sector.id}/${this.uid}//${question.id}`;
      const obj = { score: resp };
      // console.log(ref, obj);
      act.updateAnswers(ref, obj, (res) => {});

      // se for no final...
      // ao clicar numa resposta, varrer o 'this.score' para atualizar
      // e o firebase sera push
      // const obj = {
      //   questionario: [{ questao: question, resposta: answer }],
      //   sector: this.sector,
      //   business: this.business,
      //   score: resp,
      //   group: question
      // },
      // this.score.push(obj);

      // console.log("*****************");
    },
  },
};
</script>
