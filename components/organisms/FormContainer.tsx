import React from "react";
import { Button, View, VStack } from "native-base";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";

type FormProps = {
  Form: React.ElementType;
  initialValues: FormikValues;
  isEdition: boolean;
  loading: boolean;
  onSubmit: (values: FormikValues) => void;
  onDelete: () => void;
  submitButtonLabel: string;
  validationSchema: Yup.AnySchema;
};

export const FormContainer = ({
  Form,
  initialValues,
  isEdition,
  loading,
  onDelete,
  onSubmit,
  submitButtonLabel,
  validationSchema,
}: FormProps) => {
  return (
    <View paddingX={30} width="100%" testID="login-form-container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          values,
        }) => (
          <VStack space={3} mt="5" width="100%">
            <Form {...{ values, touched, errors, handleChange, handleBlur }} />
            <Button
              mt="2"
              backgroundColor="primary.900"
              isLoading={loading}
              onPress={onDelete}
              testID="form-delete-button"
            >
              Delete {submitButtonLabel}
            </Button>
            <Button
              mt="2"
              backgroundColor="primary.900"
              isLoading={loading}
              onPress={handleSubmit as (values: FormikValues) => void}
              testID="form-submit-button"
            >
              {isEdition ? "Update" : "Create"} {submitButtonLabel}
            </Button>
          </VStack>
        )}
      </Formik>
    </View>
  );
};
