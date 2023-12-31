import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import "@fortawesome/fontawesome-svg-core/styles.css";

const poppins = Poppins({
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | ngutudu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
