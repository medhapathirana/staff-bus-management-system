import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninWelcomeScreen from '../Screens/authScreens/SigninWelcomeScreen';
import HomeScreen from '../Screens/HomeScreen';
import HomeMap from '../Components/Homemap';
import SearchResults from '../SearchResults/SerachResults';
import DestinationSearch from '../DestinationSearch/DestinationSearch';
import Signup from '../Screens/authScreens/Signup';
import Registration from '../Screens/authScreens/Registration';
import NewLost from '../imagePicker/NewLost';
import BookSeats from '../Components/BookSeats/BookSeats';
import BookRegitration from '../Components/BookSeats/BookRegitration';
import PaymentScreen from '../Components/BookSeats/PaymentScreen';
import PaymentView from '../Components/BookSeats/PaymentView';
import Lost from '../imagePicker/Lost';
import HomeSearch from '../Components/HomeSearch/HomeSearch';



const Auth = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator>
            <Auth.Screen
                name="SigninWelcomeScreen"
                component={SigninWelcomeScreen}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                    //...TransitionPresets.FadeFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="SigninScreen"
                component={Signup}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />
        <Auth.Screen
                name="indexScreen"
                component={SearchResults}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />

     <Auth.Screen
                name="DestinationSearch"
                component={DestinationSearch}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />
             <Auth.Screen
                name="Registration"
                component={Registration}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />
             <Auth.Screen
                name="NewLost"
                component={NewLost}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />
      <Auth.Screen
                name="BookSeats"
                component={BookSeats}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />

    <Auth.Screen
                name="BookRegistration"
                component={BookRegitration}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />
              <Auth.Screen
                name="PaymentScreen"
                component={PaymentScreen}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />
              <Auth.Screen
                name="PaymentView"
                component={PaymentView}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />
             <Auth.Screen
                name="HomeSearch"
                component={HomeSearch}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />

<Auth.Screen
                name="SearchResults"
                component={SearchResults}
                options={{
                    headerShown: false,
                    // Using FadeFromBottomAndroid for Android
                  //  ...TransitionPresets.FadeFromBottomAndroid
                }}
            />

        </Auth.Navigator>
    );
}
