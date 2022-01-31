import React, { useCallback } from "react";
import { Alert } from "react-native";
import { FormikValues } from "formik";
import * as Yup from "yup";
import { AddBusinessForm } from "../molecules/AddBusinessForm";
import { FormContainer } from "../organisms";
import { useNavigation } from "@react-navigation/native";
import { useBusinessCreate } from "../../hooks";
import { Business } from "../../types";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Business is required"),
});

const onError = () => {
  Alert.alert(
    "Unkown error",
    "I was not possible to create the business at this time. Please try again later."
  );
};

export const AddBusinessFormContainer = ({ businessId, name }: Business) => {
  const navigation = useNavigation();
  const onSuccessEnd = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const { mutate: addBusinessMutation, isLoading } = useBusinessCreate({
    onSuccessEnd,
    onError,
  });

  const onSubmit = useCallback((values: FormikValues) => {
    addBusinessMutation(values.name);
  }, []);

  const onDelete = useCallback(() => {
    // TODO
  }, []);

  return (
    <FormContainer
      Form={AddBusinessForm}
      initialValues={{ name: businessId ? name : "" }}
      isEdition={typeof businessId === "string"}
      loading={isLoading}
      onDelete={onDelete}
      onSubmit={onSubmit}
      submitButtonLabel="Business"
      validationSchema={validationSchema}
    />
  );
};
