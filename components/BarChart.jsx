import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const BarChart = () => {
  const data = [
    {
      value: 10,
      label: "January",
    },
    {
      value: 20,
      label: "February",
    },
    {
      value: 30,
      label: "March",
    },
    {
      value: 40,
      label: "April",
    },
    {
      value: 50,
      label: "May",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        {data.map((bar, index) => (
          <View
            key={index}
            style={[styles.bar, { backgroundColor: bar.value > 20 ? "#ffff00" : "#ffffff" }]}
          >
            <Text style={styles.label}>{bar.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.line} />
      <Text style={styles.title}>Bar Chart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
  },
  chart: {
    width: "100%",
    height: 200,
  },
  bar: {
    width: 20,
    height: 100,
    borderRadius: 5,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  line: {
    width: 2,
    backgroundColor: "yellow",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BarChart;