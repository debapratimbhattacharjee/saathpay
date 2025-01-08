"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._bottomButtonContainer = void 0;
const react_native_1 = require("react-native");
const react_native_helpers_1 = require("@freakycoder/react-native-helpers");
const { width: ScreenWidth, height: ScreenHeight } = react_native_1.Dimensions.get("window");
const calculateMarginTop = (numberOfButton) => {
    if (numberOfButton === 1)
        return ScreenHeight * 0.35;
    else if (numberOfButton === 2)
        return ScreenHeight * 0.25;
    else if (numberOfButton === 3)
        return react_native_helpers_1.isIPhoneNotchFamily()
            ? ScreenHeight * 0.22
            : react_native_helpers_1.isAndroid
                ? ScreenHeight * 0.2
                : ScreenHeight * 0.13;
    else if (numberOfButton === 4)
        return react_native_helpers_1.isIPhoneNotchFamily()
            ? ScreenHeight * 0.15
            : react_native_helpers_1.isAndroid
                ? ScreenHeight * 0.13
                : ScreenHeight * 0.08;
};
exports._bottomButtonContainer = (numberOfButton) => ({
    marginTop: calculateMarginTop(numberOfButton),
});
exports.default = react_native_1.StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    mainContainer: {
        backgroundColor: "#181A1F",
        alignItems: "center",
        flex: 1,
    },
    headerContainer: {
        height: ScreenHeight * 0.27,
        justifyContent: "center",
        alignItems: "center",
    },
    titleTextStyle: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "600",
    },
    descriptionTextStyle: {
        fontSize: 15,
        color: "#696A6F",
    },
    textInputContainer: {
        width: ScreenWidth * 0.85,
    },
    textInputStyle: {
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        marginBottom: 8,
        fontSize: 16,
        paddingLeft: 32,
        backgroundColor: "#262A34",
        color: "#fff",
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
    },
    forgotPasswordTextStyle: {
        color: "#6C6D72",
    },
    forgotButtonStyle: {
        height: 30,
        justifyContent: "center",
        marginLeft: "auto",
    },
    signInButtonStyle: {
        backgroundColor: "#5467FF",
        width: ScreenWidth * 0.85,
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
        justifyContent: "center",
        alignItems: "center",
    },
    signInButtonTextStyle: {
        color: "#fff",
        fontWeight: "600",
    },
    logoImageStyle: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    googleButtonStyle: {
        backgroundColor: "#FFFFFF",
        width: ScreenWidth * 0.85,
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        marginTop: 8,
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    googleButtonTextStyle: {
        color: "#181A1F",
        fontWeight: "600",
    },
    facebookButtonStyle: {
        backgroundColor: "#3A579B",
        width: ScreenWidth * 0.85,
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        marginTop: 8,
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    facebookButtonTextStyle: {
        color: "#FFF",
        fontWeight: "600",
    },
    signUpButtonContainer: {
        marginTop: 8,
        width: ScreenWidth * 0.9,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    signUpButtonStyle: {
        height: 40,
        justifyContent: "center",
        marginLeft: 8,
    },
    signUpTextStyle: {
        fontSize: 14,
        color: "#fff",
    },
    signUpButtonTextStyle: {
        fontSize: 14,
        color: "#4251BC",
    },
    appleButtonStyle: {
        backgroundColor: "#FFFFFF",
        width: ScreenWidth * 0.85,
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        marginTop: 8,
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    appleButtonTextStyle: {
        color: "#181A1F",
        fontWeight: "600",
    },
    newAccountContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    keyboardAvoidingViewStyle: {
        flex: 1,
        alignItems: "center",
    },
});
//# sourceMappingURL=DarkLoginScreen.style.js.map