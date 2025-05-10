import { useState } from "react";
import Step1FirstName from "./Step1FirstName";
import StepLastName from "./StepLastName";
import Step2Wheels from "./Step2Wheels";
import Step3VehicleType from "./Step3VehicleType";
import Step4Model from "./Step4Model";
import Step5DateRange from "./Step5DateRange";
import { postBooking } from "../api";

export default function FormStepper() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => setStep((prev) => prev + 1);
  const handleSubmit = () => {
    postBooking(formData).then(() => {
      alert("Booking successful!");
    }).catch(() => alert("Booking failed"));
  };

  const steps = [
    <Step1FirstName data={formData} setData={setFormData} onNext={handleNext} />,
    <StepLastName data={formData} setData={setFormData} onNext={handleNext} />,
    <Step2Wheels data={formData} setData={setFormData} onNext={handleNext} />,
    <Step3VehicleType data={formData} setData={setFormData} onNext={handleNext} />,
    <Step4Model data={formData} setData={setFormData} onNext={handleNext} />,
    <Step5DateRange data={formData} setData={setFormData} onSubmit={handleSubmit} />,
  ];

  return (
    <div style={{ maxWidth: 600, margin: "auto", marginTop: 50 }}>
      {steps[step]}
    </div>
  );
}
