import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "../store/store";
import Navigation from "../navigation";
import useFontsLoading from "../hooks/useFontsLoad";
import AppContextProvider from "./AppContextProvider";

const queryClient = new QueryClient();

const App = () => {
  const isLoaded = useFontsLoading();

  if (isLoaded) {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store()}>
          <AppContextProvider>
            <Navigation />
          </AppContextProvider>
        </Provider>
      </QueryClientProvider>
    );
  } else {
    return null;
  }
};

export default App;
