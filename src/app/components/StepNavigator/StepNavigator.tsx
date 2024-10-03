"use client";
import React, { useState } from "react";
import Step1 from "../MainPage/step1/Step1"
import Step2 from "../MainPage/step2/Step2"
import Step3 from "../MainPage/step3/Step3"
import MainPage from "../MainPage/MainPage"
import { APIProvider } from "@vis.gl/react-google-maps";

export default function StepNavigator() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    <MainPage onStart={() => setActiveStep(1)} />,
    <Step1 onNext={() => setActiveStep(2)} />,
    <Step2 onNext={() => setActiveStep(3)} />,
    <Step3 />,
  ];

  return (
    <APIProvider apiKey={"AIzaSyCvvlLvJ8yDgKup6hw6jPtHn3JGWJdS6sQ"}>
      {steps[activeStep]}
    </APIProvider>
  );
}
