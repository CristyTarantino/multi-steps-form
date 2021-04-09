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

import validationSchema from './FormModel/validationSchema';
import signUpFormModel from './FormModel/signUpFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const steps = ['User', 'Privacy', 'Done'];
const { formId, formField } = signUpFormModel;

const renderStepContent = (step: number): JSX.Element => {
  switch (step) {
    case 0:
      return <UserForm formField={formField} />;
    case 1:
      return <PrivacyForm formField={formField} />;
    case 2:
      return <SignUpSuccess />;
    default:
      return <div>Not Found</div>;
  }
};

const SignUpPage: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 2;

  const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const submitForm = async (
    values: { [x: string]: string | boolean },
    actions: { setTouched?: (arg0: unknown) => void; setSubmitting: any },
  ) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (
    values: any,
    actions: {
      setTouched: any;
      setSubmitting: any;
    },
  ) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length - 1 ? (
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
                {renderStepContent(activeStep)}

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
