import { AuthProvider } from "@/contexts/auth.context";
import React from "react";
import ReactQueryProvider from "./reactQuery.provider";
import { ReduxProvider, store } from "@/redux/store";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
