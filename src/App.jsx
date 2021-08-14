import React from "react";
import "./App.css";
import FormSection from "./components/FormSection";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    //
    <div className="bg-mb-wallpaper md:bg-pc-wallpaper bg-prim-red">
      <div className="py-12 px-5 grid md:grid-cols-2 max-w-5xl mx-auto">
        <HeroSection />
        <FormSection />
      </div>
    </div>
  );
}

export default App;
