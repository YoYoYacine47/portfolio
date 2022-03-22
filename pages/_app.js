import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";
import { Store } from "../app/Store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={Store}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
