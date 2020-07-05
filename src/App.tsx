import React from "react";
import {
  useState,
  useReducer,
  createContext,
  useContext,
  useEffect,
} from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Login from "./pages/Login";
import Hio from "./Hio";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { Context } from "./Context";
import { useHistory } from "react-router-dom";

const App: React.FC = () => {
  const [context, setContext] = useState({ isAuthed: false });

  useEffect(() => {
    console.log("app level context in useEffect", context);
  });
  return (
    <IonApp>
      <Context.Provider value={[context, setContext]}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Switch>
              <Route
                path="/"
                exact
                render={() => {
                  console.log("router isAuthed", context.isAuthed);
                  return context.isAuthed ? (
                    <Redirect to="/hio" />
                  ) : (
                    <Redirect to="/login" />
                  );
                }}
              />
              <Route path="/login" component={Login} exact />
              <Route path="/hio" component={Hio} exact />
            </Switch>
          </IonRouterOutlet>
        </IonReactRouter>
      </Context.Provider>
    </IonApp>
  );
};

export default App;
