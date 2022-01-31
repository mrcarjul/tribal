import React from "react";
import { VStack } from "native-base";
import { FormikProps } from "formik";
import { IconBusiness, BasicInput } from "../atoms";
import { AddBusinessFormValues } from "../../types";

export const AddBusinessForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
}: FormikProps<AddBusinessFormValues>) => {
  return (
    <VStack space={3} mt={1}>
      <BasicInput
        placeholder="Business name"
        error={touched.name ? errors.name : undefined}
        onBlur={handleBlur("name")}
        onChangeText={handleChange("name")}
        testID="add-bussines-input-name"
        InputLeftElement={<IconBusiness />}
        value={values.name}
      />
    </VStack>
  );
};
