import Firebase from "firebase";

const getQuestions = (call) => {
  Firebase.database()
    .ref(`/questions`)
    .once("value", (snap) => {
      snap = snap.val();

      const rPList = [];
      for (let i in snap) {
        if (snap[i]) {
          rPList.push({
            ...snap[i],
            id: i,
          });
        }
      }
      call(rPList);
    });
};

const getRespostas = (call) => {
  Firebase.database()
    .ref(`/respostas`)
    .once("value", (snap) => {
      snap = snap.val();
      const rRList = [];
      for (let i in snap) {
        if (snap[i]) {
          rRList.push({
            ...snap[i],
            id: i,
          });
        }
      }

      call(rRList);
    });
};

const postAnswers = (obj, call) => {
  Firebase.database()
    .ref(`/teste-resposta`)
    .push(obj, (err) => {
      if (err) {
        console.error(err);
        call(false);
        return;
      }
      call(true);
    });
};

const getScore = (answer, questionId) => {
  // let score = null;


  return score;
};

export default {
  getQuestions,
  getRespostas,
  postAnswers,
  getScore,
};
