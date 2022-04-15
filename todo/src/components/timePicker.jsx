import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const TimePicker = ({ getDate, minDate }) => {
  const [time, setTime] = useState();
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    setShow(false);
    getDate(event);
  };

  return (
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({});

export default TimePicker;
