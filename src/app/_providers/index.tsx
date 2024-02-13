import { AuthProvider } from "@/contexts/auth.context";
import React from "react";
import ReactQueryProvider from "./reactQuery.provider";
import { ReduxProvider } from "@/redux/store";
import { Provider } from "react-redux";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
    <ReactQueryProvider>
      <ReduxProvider>
        <AuthProvider>
          {children}
          </AuthProvider>
      </ReduxProvider>
    </ReactQueryProvider></Provider>
  );
}

export default Providers;