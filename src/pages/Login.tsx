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
  IonGrid,
  IonRow,
  IonCol,
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
          <IonTitle>
            Login context.isAuth: {context.isAuthed.toString()}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="This is rendered by the login component: url should be /login" />
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="1">
              <IonButton
                onClick={(e) => {
                  console.log("e", e);
                  console.log(
                    "Login Button onClick handler context.isAuthed: ",
                    context.isAuthed
                  );
                  setContext({ isAuthed: true });
                  history.replace("/");
                }}
              >
                Login
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="3">
              <p>
                Don't have an account? <a href="/register">Register</a> here
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
