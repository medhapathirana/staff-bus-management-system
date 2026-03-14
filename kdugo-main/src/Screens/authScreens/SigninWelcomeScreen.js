
import React,{useState,useRef} from 'react'
import { View, Text, StyleSheet, Dimensions,Image } from 'react-native'
import { color, colors, parameters } from '../../global/styles'
import Header from '../../Components/Header';
import { Icon,Button,SocialIcon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';



export default function SigninWelcomeScreen({navigation}){
    
    return (
        <View style = {{flex : 1}}>
            <View style = {{flex : 3 , justifyContent : 'flex-start', alignItems : 'center',paddingTop:20}}>
                <Text style = {{fontSize : 26, color : colors.buttons, fontWeight : "bold"}}>Discover Our Service</Text>
                <Text style = {{fontSize : 26 , color : colors.buttons,fontWeight : "bold" }}>In Your Area</Text>
            </View>

        <View style = {{flex : 4,justifyContent : "center"}}>
        <Swiper autoplay = {true}>
            <View style = {styles.slide1}>
           <Image source={require('../../../assets/imgs/bus.png-removebg-preview.png')}
           style = {{height : '80%', width : '80%'}}
           
           />
            </View>
            <View style = {styles.slide2}>
           <Image source={require('../../../assets/imgs/bus.png-removebg-preview.png')}
           style = {{height : '80%', width : '80%'}}
           
           />
            </View>
            <View style = {styles.slide3}>
           <Image source={require('../../../assets/imgs/bus.png-removebg-preview.png')}
           style = {{height : '80%', width : '80%'}}
           
           />
            </View>

        </Swiper>
            </View>
            <View style = {{flex : 4,justifyContent : "flex-end",marginBottom :50}}>
            <View style={{marginHorizontal: 20, marginTop: 2}}>
                <Button 
                    title="Welcome"
                    buttonStyle={parameters.styleButton}
                    titleStyle={parameters.buttonTitle}
                    onPress={()=>{
                        navigation.navigate("Registration")
                    }}
                />
            </View>
            {/* <View style = {{marginHorizontal : 20,marginTop : 15}}>
                <Button
                    title="Create an account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View> */}

            </View>
        </View>
    )
}


const styles  = StyleSheet.create({
    slide1 : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "D992BB"
    },
    slide2 : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "97CAE5"
    },
    slide3 : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "92BBD9"
    },
    createButton: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F8A600',
        height: 50,
        paddingHorizontal: 20,
      },
      createButtonTitle: {
        color: 'grey',
        fontSize: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
      },
})