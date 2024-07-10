import React from 'react';
import { View, Text,StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
const LoginPage = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.main}>
      <Text style={{fontSize:26,fontWeight:'600'}}>Login</Text>
    </View>
    <View style={styles.mailContainer}>
        <Text style={{fontSize:16 , color:"#050F2B"}}>Email address:</Text>
        <TextInput style={{borderWidth:1,width:340,height:50,borderRadius:5 ,padding:10}} placeholder='example@gmail.com' />
    </View>
    <View style={styles.pwdContainer}>
        <Text style={{fontSize:16 , color:"#050F2B"}}>Password:</Text>
        <TextInput style={{borderWidth:1,width:340,height:50,borderRadius:5 ,padding:10}} placeholder='example@123' />
    </View>
    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BottomNav')}>
        <Text style={{fontSize:14,fontWeight:'500',color:'#FFFFFF'}}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('ForgotPwd')}>
        <Text>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.googleBtn}>
        <AntDesign name="google" size={24} color="#364A15" />
        <Text>Continue with Google</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.appleBtn}>
        <AntDesign name="apple1" size={24} color="#364A15" />
        <Text>Continue with Apple</Text>
    </TouchableOpacity>
    <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',gap:5,marginTop:'30%'}}>
        <Text>You don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}><Text style={{color:'#1AC84B'}}>Sign Up</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default LoginPage;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#D2F4D6",
        alignItems:'center',
    },
    main:{
        marginTop:'25%',
    },
    mailContainer:{
        marginTop:50,
        gap:6,
    },
    pwdContainer:{
        marginTop:30,
        gap:6,
    },
    btn:{
        width:340,
        height:50,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#364A15',
        marginTop:40,
    },
    googleBtn:{
        width:290,
        height:60,
        borderRadius:50,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        flexDirection:'row',
        gap:20,
    },
    appleBtn:{
        width:290,
        height:60,
        borderRadius:50,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        flexDirection:'row',
        gap:30,
    },
})