import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, View, StyleSheet, ToastAndroid } from "react-native";
import { Formik } from "formik";
import { createWorkoutSchema } from "../../../utils/validation";
import { Input, Card, Button } from "react-native-elements";
import { Dropdown } from "react-native-element-dropdown";
import { COLORS } from "../../../utils/constants";
import { getOptionsFromEnum } from "../../../utils/methods";
import { BodyZones, Equipments, TargetZones } from "../../../utils/enums";
import { createWorkout } from "../workout-actions";

interface CreateExerciseModalProps {
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateExerciseModal = ({
  isShowing,
  setIsShowing,
}: CreateExerciseModalProps) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: any) => state.auth);
  const { loading, newWorkout, error } = useSelector(
    (state: any) => state.workout
  );

  // To handle statuses of create workout API
  useEffect(() => {
    if (newWorkout && !loading && !error) {
      ToastAndroid.showWithGravity(
        "New exercise has been added",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  }, [loading, error]);

  const handleSubmit = (values: any) => {
    dispatch(createWorkout(values, token));
  };

  return (
    <Modal
      animationType="slide"
      visible={isShowing}
      onRequestClose={() => setIsShowing(false)}
    >
      <View>
        <Card containerStyle={styles.header}>
          <Card.Title
            h4
            style={{
              marginBottom: 0,
              color: COLORS.Primary.main,
            }}
          >
            Create Exercise
          </Card.Title>
        </Card>
        <Formik
          initialValues={{
            name: "",
            description: "",
            equipment: "",
            target: "",
            bodyPart: "",
            gif: "https://images.unsplash.com/photo-1603077492340-e6e62b2a688b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          validationSchema={createWorkoutSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            handleBlur,
            setFieldValue,
            handleChange,
            handleSubmit,
          }) => (
            <View style={styles.formView}>
              <Input
                placeholder="Name"
                value={values.name}
                errorMessage={errors.name}
                onBlur={handleBlur("name")}
                onChangeText={handleChange("name")}
              />
              <Input
                placeholder="Description"
                value={values.description}
                multiline
                numberOfLines={4}
                errorMessage={errors.description}
                onBlur={handleBlur("description")}
                onChangeText={handleChange("description")}
              />
              <Dropdown
                labelField="label"
                valueField="value"
                placeholder="Target"
                placeholderStyle={{ color: COLORS.Placeholder }}
                search
                style={{
                  borderBottomColor: COLORS.Primary.main,
                  borderBottomWidth: 2,
                  marginLeft: 8,
                  marginRight: 8,
                }}
                data={getOptionsFromEnum(TargetZones)}
                onBlur={() => handleBlur("target")}
                onChange={(item) => setFieldValue("target", item.value)}
              />
              <Dropdown
                labelField="label"
                valueField="value"
                placeholder="Body Part"
                placeholderStyle={{ color: COLORS.Placeholder }}
                search
                style={{
                  borderBottomColor: COLORS.Primary.main,
                  borderBottomWidth: 2,
                  marginTop: 22,
                  marginLeft: 8,
                  marginRight: 8,
                }}
                data={getOptionsFromEnum(BodyZones)}
                onBlur={() => handleBlur("bodyPart")}
                onChange={(item) => setFieldValue("bodyPart", item.value)}
              />
              <Dropdown
                value={values.equipment}
                labelField="label"
                valueField="value"
                placeholder="Equipment"
                placeholderStyle={{ color: COLORS.Placeholder }}
                search
                style={{
                  borderBottomColor: COLORS.Primary.main,
                  borderBottomWidth: 2,
                  marginTop: 22,
                  marginLeft: 8,
                  marginRight: 8,
                }}
                data={getOptionsFromEnum(Equipments)}
                onBlur={() => handleBlur("equipment")}
                onChange={(item) => setFieldValue("equipment", item.value)}
              />
              <Button
                title="Submit"
                loading={loading}
                titleStyle={{ fontSize: 14 }}
                containerStyle={{ marginTop: 18 }}
                onPress={() => handleSubmit()}
              />
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: COLORS.Primary.main,
    borderBottomWidth: 2,
    marginBottom: 6,
  },
  formView: {
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default CreateExerciseModal;
