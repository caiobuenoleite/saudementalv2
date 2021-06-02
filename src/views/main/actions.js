import Firebase from "firebase";

const getSectors = (businessId, call) => {
  Firebase.database()
    .ref(`/${businessId}`)
    .once("value", (snap) => {
      snap = snap.val();

      const rList = [];
      for (let i in snap) {
        if (snap[i].active) {
          rList.push({
            ...snap[i],
            id: i,
          });
        }
      }

      call(rList);
    });
};

export default {
  getSectors,
};
