import { Roboto } from "next/font/google"
import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"
import "./globals.css"



export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <Nav/>
          {children}
          <Footer/>
          </body>
      </html>
    )
  }