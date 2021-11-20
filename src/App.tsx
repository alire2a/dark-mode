import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Paragraph } from "./components/Paragraph";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="bg-blue-50 dark:bg-gray-900 font-sans h-screen">
      <div className="container mx-auto py-24">
        <Header />
        <Paragraph />
        <Form />
      </div>
    </div>
  );
}

export default App;
