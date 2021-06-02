import Firebase from "firebase";

const getQuestions = (call) => {
  Firebase.database()
    .ref(`/questions`)
    .once("value", (snap) => {
      snap = snap.val();
      call(snap);
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

export default {
  getQuestions,
  postAnswers,
};
