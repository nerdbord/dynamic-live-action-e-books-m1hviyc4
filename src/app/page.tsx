"use client";
import React, { useState } from "react";
import Step1 from "./components/MainPage/step1/Step1";
import MainPage from "./components/MainPage/MainPage";
import Step2 from "./components/MainPage/step2/Step2";
import Step3 from "./components/MainPage/step3/Step3";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Home(): JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleSetStep = (step: number) => {
    setActiveStep(step);
  };

  const renderContent = () => {
    switch (activeStep) {
      case 1:
        return <Step1 onNext={() => handleSetStep(2)} />;
      case 2:
        return <Step2 onNext={() => handleSetStep(3)} />;
      case 3:
        return <Step3 />;
      default:
        return <MainPage onStart={() => handleSetStep(1)} />;
    }
  };

  return (
    <APIProvider apiKey={"AIzaSyCvvlLvJ8yDgKup6hw6jPtHn3JGWJdS6sQ"}>
      {renderContent()}
    </APIProvider>
  );
}
