import type { AppProps } from "next/app";
import { Flip, ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { AuthUserProvider } from "@/context/AuthUserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        transition={ Flip }
      />
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}
