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
import { useHistory } from "react-router-dom";
import "./ExploreContainer.css";
import { Context } from "../Context";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [context, setContext] = useContext(Context);
  const history = useHistory();
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      {context.isAuthed && (
        <IonButton
          onClick={(e) => {
            console.log("e", e);
            setContext({ isAuthed: false });
            console.log(
              "isAuthed in explorecontainer context.isAuthed",
              context.isAuthed
            );
            history.replace("/login");
          }}
        >
          Logout
        </IonButton>
      )}
    </div>
  );
};

export default ExploreContainer;
