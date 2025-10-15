import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TimerProvider } from "@/components/Timer/TimerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TimerProvider>
      <Component {...pageProps} />
    </TimerProvider>
  );
}
