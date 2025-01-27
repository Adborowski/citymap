import { getDatabase, ref, set, get, child } from "firebase/database";
import { firebaseConfig } from "./firebase";
import { ansiColors } from "./util";
import { initializeApp } from "firebase/app";

export const app = initializeApp(firebaseConfig);

const db = getDatabase();
const dbRef = ref(db);

export const saveMarker = (marker) => {
  set(ref(db, "markers/" + marker.id), {
    ...marker,
  })
    .then(() => {
      console.log("saved marker", marker.title);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getMarkers = async (setMarkers) => {
  let data = [];
  let snapshot;

  try {
    snapshot = await get(child(dbRef, "/markers"));
  } catch {
    (e) => {
      console.log("ERROR", e);
    };
  }

  if (snapshot.exists()) {
    data = snapshot.val();
  }

  data = Object.values(data);
  console.log(data.length);
  return data;
};
