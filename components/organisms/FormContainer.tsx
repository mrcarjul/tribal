import React from "react";
import { Button, Icon, Text, View, VStack } from "native-base";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { FontAwesome } from "@expo/vector-icons";

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
    <View paddingX={30} testID="login-form-container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <VStack space={3} mt={3}>
            <Form {...{ errors, handleBlur, handleChange, touched, values }} />
            <Button
              colorScheme="error"
              isDisabled={!isEdition}
              isLoading={loading}
              leftIcon={<Icon as={FontAwesome} name="trash" size="sm" />}
              mt="2"
              onPress={onDelete}
              testID="form-delete-button"
            >
              {`Delete ${submitButtonLabel}`}
            </Button>
            <Button
              colorScheme="primary"
              isDisabled={
                (isEdition &&
                  JSON.stringify(initialValues) === JSON.stringify(values)) ||
                Object.keys(errors).length !== 0
              }
              isLoading={loading}
              isLoadingText="Submitting"
              leftIcon={<Icon as={FontAwesome} name="plus" size="sm" />}
              mt="2"
              onPress={handleSubmit as (values: FormikValues) => void}
              testID="form-submit-button"
            >
              {`${isEdition ? "Update" : "Create"} ${submitButtonLabel}`}
            </Button>
          </VStack>
        )}
      </Formik>
    </View>
  );
};
