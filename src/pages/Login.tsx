import React from "react";
import {
  useState,
  useReducer,
  createContext,
  useContext,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { Context } from "../Context";

const Login: React.FC = () => {
  const [context, setContext] = useContext(Context);
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login: context: {context.isAuthed.toString()}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Login page" />
        <IonButton
          onClick={(e) => {
            console.log("e", e);
            console.log("isAuthed", context.isAuthed);
            setContext({ isAuthed: true });
            history.replace("/");
          }}
        >
          Login
        </IonButton>
        <p>
          Don't have an account? <a href="/register">Register</a> here
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
