import React, { useEffect } from "react";
import Modal from "react-modal";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

type Props = {
  handler: () => unknown;
};

const Signup: React.FC<Props> = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { handler } = props;
  function afterOpenModal() {}
  function closeModal() {
    handler();
    setIsOpen(false);
  }
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const googleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log(result.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
    >
      <button onClick={googleAuth}>test</button>
    </Modal>
  );
};

export default Signup;
