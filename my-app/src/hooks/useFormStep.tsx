import { useState } from 'react';
import { FORM_STEP, type FormStep } from '../constants/formStep';

function useFormStep() {
  const [step, setStep] = useState<FormStep>(FORM_STEP.CARD_NUMBER);

  function openStep(nextStep: FormStep) {
    setStep((prevStep) => (nextStep > prevStep ? nextStep : prevStep));
  }

  return { step, openStep };
}

export default useFormStep;
