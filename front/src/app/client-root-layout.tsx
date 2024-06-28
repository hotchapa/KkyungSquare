"use client";

import { GlobalStyle } from "@/common/styles/global-style";
import { styled,ThemeProvider } from "styled-components";
import { mainTheme } from "@/common/styles/theme";
import { darkTheme } from "@/common/styles/theme";

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
          {children}
    </ThemeProvider>
  );
}
