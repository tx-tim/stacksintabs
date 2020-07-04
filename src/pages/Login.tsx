import React from "react";
import {
  useState,
  useReducer,
  createContext,
  useContext,
  useEffect,
} from "react";
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

interface LoginProps {
  isAuthed?: boolean;
  onLogin?: Function;
}
const Login: React.FC<LoginProps> = ({ isAuthed = false }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login: {isAuthed.toString()}</IonTitle>
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
            console.log("isAuthed", isAuthed);
          }}
        >
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
