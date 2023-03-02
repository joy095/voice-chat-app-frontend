import React, { useState } from "react";
import StepAvatar from "../../components/shared/Steps/StepAvatar/StepAvatar";
import StepName from "../../components/shared/Steps/StepName/StepName";
import StepOtp from "../../components/shared/Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../../components/shared/Steps/StepPhoneEmail/StepPhoneEmail";
import StepUserName from "../../components/shared/Steps/StepUserName/StepUserName";
import styles from "./Register.module.css";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUserName,
};

const Register = () => {
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

export default Register;
