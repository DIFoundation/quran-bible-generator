import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import UserCounter from "../component/UserCounter";
import ContactForm from "../component/ContactForm";
import RootLayout from "../layout";

export default function Contact() {
  return (
    <RootLayout title={"Contact"}>
      <main className="bg-purple-900 dark:bg-black w-full h-screen md:h-auto">
        <Navbar />
        <ContactForm />
        <UserCounter />
        <Footer />
      </main>
    </RootLayout>
  );
}
