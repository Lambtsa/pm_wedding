import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
import { Fragment } from "react";
import { theme } from "@styles";
import { GlobalStyle } from "@styles";
import { useLanguage } from "@hooks/useLanguage";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { locale, translations } = useLanguage();
  console.log({ IntlProvider, locale, translations });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IntlProvider
        locale={locale}
        messages={translations}
        textComponent={Fragment}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
}
