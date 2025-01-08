"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const DarkLoginScreen_style_1 = tslib_1.__importDefault(require("./DarkLoginScreen.style"));
const SignUpScreen_1 = tslib_1.__importDefault(require("./screens/sign-up/SignUpScreen"));
const SignInScreen_1 = tslib_1.__importDefault(require("./screens/sign-in/SignInScreen"));
const DarkLoginScreen = (props) => {
    const [newAccount, setNewAccount] = React.useState(false);
    const renderScreenChange = () => {
        if (!newAccount) {
            return (<SignInScreen_1.default {...props} onSignupPress={() => {
                props.handleSignUp && props.handleSignUp();
                setNewAccount(true);
            }}/>);
        }
        else {
            return (<react_native_1.View style={DarkLoginScreen_style_1.default.screenContainer}>
          <SignUpScreen_1.default {...props} handleSignIn={() => setNewAccount(false)}/>
        </react_native_1.View>);
        }
    };
    return <react_native_1.View style={DarkLoginScreen_style_1.default.mainContainer}>{renderScreenChange()}</react_native_1.View>;
};
exports.default = DarkLoginScreen;
//# sourceMappingURL=DarkLoginScreen.js.map