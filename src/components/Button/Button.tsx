import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../utils/globalVariables";

interface ButtonPropsType {
    text: string;
    style?: any;
    type?: "primary" | "secondary" | "disabled";
    onPress: () => void;
}

const Button = ({
    text,
    style,
    type = "primary",
    onPress,
    ...props
}: ButtonPropsType) => {
    const isPrimary = type === "primary";
    const isSecondary = type === "secondary";
    const isDisabled = type === "disabled";
    const buttonStyle = isPrimary
        ? styles.buttonPrimary
        : isSecondary
        ? styles.buttonSecondary
        : styles.disabled;
    const textStyle = isSecondary ? styles.textDark : styles.textWhite;
    return (
        <TouchableOpacity
            style={[styles.buttonWrapper, buttonStyle, style]}
            onPress={onPress}
            disabled={isDisabled}
            {...props}
        >
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical: 16,
        gap: 10,
        borderRadius: 10,
    },
    buttonPrimary: {
        backgroundColor: COLORS.PRIMARY.blueOcean,
    },
    buttonSecondary: {
        backgroundColor: COLORS.PRIMARY.pureWhite,
    },
    disabled: {
        backgroundColor: COLORS.SECONDARY.halfGrey,
    },
    buttonText: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 20,
    },
    textWhite: {
        color: COLORS.PRIMARY.pureWhite,
    },
    textDark: {
        color: COLORS.PRIMARY.navyBlack,
    },
});
