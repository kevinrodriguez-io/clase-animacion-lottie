import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import LottieView from "lottie-react-native";
import * as Haptics from 'expo-haptics';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading && !isDone ? (
        <>
          <LottieView
            ref={(animation) => {
              animation?.play();
            }}
            style={{
              width: 250,
              height: 250,
            }}
            source={require("./assets/loading.json")}
          />
          <Text>Cargando...</Text>
        </>
      ) : null}
      {!isLoading && isDone ? (
        <>
          <LottieView
            ref={(animation) => {
              animation?.play();
            }}
            loop={false}
            style={{
              width: 250,
              height: 250,
            }}
            source={require("./assets/success.json")}
          />
          <Text>Exito!</Text>
        </>
      ) : null}

      <View
        style={{
          marginTop: 10,
        }}
      >
        <Button
          title="Ejecutar algo"
          onPress={async () => {
            setIsLoading(false);
            setIsDone(false);
            setIsLoading(true);
            await new Promise((resolve) =>
              setTimeout(() => {
                resolve();
              }, 3000)
            );
            setIsLoading(false);
            await Haptics.notificationAsync();
            setIsDone(true);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
