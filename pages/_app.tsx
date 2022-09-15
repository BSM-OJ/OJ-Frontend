import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import Header from "../components/header/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyle /> <Component {...pageProps} />
    </ThemeProvider>
  );
}
