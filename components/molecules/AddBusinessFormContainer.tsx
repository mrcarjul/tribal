import React, { useCallback } from "react";
import { Alert } from "react-native";
import { useMutation } from "react-query";
import { FormikValues } from "formik";
import * as Yup from "yup";
import { API, businessEndpoints } from "../../services";
import { AddBusinessForm } from "../molecules/AddBusinessForm";
import { FormContainer } from "../organisms";

type AddBusinessFormContainerProps = {
  businessId?: string;
  name?: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Business is required"),
});

const addBusinessMutationOptions = {
  onSuccess: () => {
    Alert.alert("Business added");
  },
  onError: () => {
    Alert.alert(
      "Unkown error",
      "I was not possible to create the business at this time please try again later"
    );
  },
};

export const AddBusinessFormContainer = ({
  businessId,
  name,
}: AddBusinessFormContainerProps) => {
  const { mutate: addBusinessMutation, isLoading } = useMutation(
    (name: string) => businessEndpoints(API).addBusiness(name),
    addBusinessMutationOptions
  );

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
