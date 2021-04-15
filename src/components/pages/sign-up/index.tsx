import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { Formik, Form } from 'formik';

import UserForm from './Forms/UserForm';
import PrivacyForm from './Forms/PrivacyForm';
import SignUpSuccess from './SignUpSuccess';

import validationSchema from '../../../models/SignUpForm/validationSchema';
import signUpFormModel from '../../../models/SignUpForm/signUpFormModel';
import formInitialValues from '../../../models/SignUpForm/formInitialValues';

import useStyles from './styles';

const { formId, formField } = signUpFormModel;

const getSteps = () => ['User', 'Privacy', 'Done'];

const getStepContent = () => [
  <UserForm formField={formField} />,
  <PrivacyForm formField={formField} />,
];

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const SignUpPage: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const steps = getSteps();
  const stepsContent = getStepContent();
  const [activeStep, setActiveStep] = useState(0);
  const [activeStepContent, setActiveStepContent] = useState(0);
  const currentValidationSchema = validationSchema[activeStepContent];
  const isLastStep = activeStepContent === stepsContent.length - 1;

  const submitForm = async (
    values: { [x: string]: string | boolean },
    actions: { setTouched?: (arg0: unknown) => void; setSubmitting: any },
  ) => {
    // pretend to make a call
    await sleep(1000);
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setActiveStepContent(prevActiveStep => prevActiveStep + 1);
  };

  const handleSubmit = (
    values: any,
    actions: {
      setTouched: any;
      setSubmitting: any;
    },
  ) => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);

    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStepContent(prevActiveStep => prevActiveStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    setActiveStepContent(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        Create a new account
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStepContent === steps.length - 1 ? (
          <SignUpSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            // eslint-disable-next-line no-console
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {getStepContent()[activeStepContent]}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Submit' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </>
    </>
  );
};

export default SignUpPage;
