
import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, View, Keyboard } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateField = ({ isEditable, initialDate ,getDate }) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [show, setShow] = useState(false);

  useEffect(() => {
    initialDate
      ? setDate(initialDate)
      : setDate(dateToDashedYYYYMMDD(new Date()));
  }, []);

  const handleOnFieldClick = () => {
    setShow(true);
  };

  const onChange = (event) => {
    setShow(false);
    if (event.type === "dismissed") return;
    const selectedDate = event.nativeEvent.timestamp;
    setDate(selectedDate); 
    getDate(selectedDate);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={date}
          onFocus={() => {
            handleOnFieldClick();
            Keyboard.dismiss();
          }}
          keyboardType="numeric"
          value={reverseDashedDate(date)}
          editable={isEditable}
        />
        {/*TODO: Hide keyboard , onclick it apeared for milisecend and the hide . */}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(date)}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    textAlign: "center",
  },

  input: {
    marginHorizontal: 5,
    borderWidth: 1,
    padding: 3,
  },
});

export default DateField;
