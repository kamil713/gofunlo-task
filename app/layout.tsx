import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import MockedTopBar from "@/app/ui/mocks/mocked-top-bar";
import MockedHeader from "@/app/ui/mocks/mocked-header";
import MockedFooter from "@/app/ui/mocks/mocked-footer";
import {mulish} from "@/app/ui/fonts";
import { ThemeProvider } from "@mui/material/styles";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import theme from "@/app/ui/theme";

export const metadata: Metadata = {
  title: "GoFunlo - Zadanie rekrutacyjne",
  description: "Zadanie rekrutacyjne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
    <body
        className={`${mulish.variable} antialiased`}
    >
    <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
            <MockedTopBar />
            <MockedHeader />
                {children}
            <MockedFooter />
        </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
