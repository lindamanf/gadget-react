import firebase from "firebase";

export interface IProduct {
  amazon?: string;
  created_at: firebase.firestore.Timestamp;
  name: string;
  provider?: string;
  tags: string[];
  url: string;
  img_src: string;
  released_at: firebase.firestore.Timestamp;
}

export type ActionTypeCreator<T> = {
  [P in keyof T]: { type: P } & T[P];
}[keyof T];
