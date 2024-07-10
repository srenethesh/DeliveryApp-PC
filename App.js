import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from './Screen/BottomNav.js'
import ViewDetails from './Screen/ViewDetails.js';
import HomeScreen from './Screen/HomeScreen.js';
import LoginPage from './Screen/LoginPage.js';
import SignUpPage from './Screen/SignUpPage.js';
import ForgotPwd from './Screen/ForgotPwd.js';
const stack = createNativeStackNavigator();


export default function App(){
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}} />
            <stack.Screen name="SignUpPage" component={SignUpPage} options={{headerShown:false}} />
            <stack.Screen name="ForgotPwd" component={ForgotPwd} options={{headerShown:false}} />
            <stack.Screen  initialRouteName="LoginPage"
            name="BottomNav"
            component={BottomNav}
            options={{headerShown:false}}
            />

            <stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <stack.Screen name="ViewDetails" component={ViewDetails} options={{headerShown:false}} />
            </stack.Navigator>
            </NavigationContainer>
    )
}