import React from "react";
import { Provider } from "react-redux";
import store from "./app/state/store";
import { UserInfo } from "./app/views";
import Theme from "./Theme";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <UserInfo />
      </Theme>
    </Provider>
  );
}

export default App;
