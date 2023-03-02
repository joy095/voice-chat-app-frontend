import React, { useState } from "react";
import StepOtp from "../../components/shared/Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../../components/shared/Steps/StepPhoneEmail/StepPhoneEmail";

const Login = () => {
  const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
  };

  const [step, setStep] = useState(1);
  function onNext() {
    setStep(step + 1);
  }

  const Step = steps[step];
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Login;
