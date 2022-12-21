import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button/Button";
import { COLORS } from "./src/utils/globalVariables";

export default function App() {
    const onPressHandler = () => {
        console.log("press ne");
    };
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
            <Button text="Sign in" onPress={onPressHandler} type="disabled" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY.pureWhite,
        alignItems: "center",
        justifyContent: "center",
    },
});
