import Firebase from "firebase";

const getBusinessList = (call) => {
  Firebase.database()
    .ref("/empresas")
    .once("value", (snap) => {
      snap = snap.val();

      const rList = [];
      rList.push({
        value: null,
        text: "Selecione a sua empresa",
        disabled: true,
      });

      for (let id in snap) {
        const item = snap[id];
        if (item.active) {
          rList.push({
            value: { ...item, id: id },
            text: id
          });
        }
      }

      call(rList);
    });
};

export default {
  getBusinessList,
};
