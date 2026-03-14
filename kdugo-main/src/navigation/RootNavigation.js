import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authnavigators'




export default function RootNavigation(){
        return(
           
           <NavigationContainer>
            <AuthStack/>
           </NavigationContainer>
  
        )
}