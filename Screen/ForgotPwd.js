import React from 'react';
import { View, Text,StyleSheet,TextInput,SafeAreaView,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const ForgotPwd = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.main}>
      <Text style={{fontSize:26,fontWeight:'600'}}>Forgot Password</Text>
    </View>
    <MaterialIcons style={{marginTop:20}} name="privacy-tip" size={34} color="#364A15" />
    <View style={{alignItems:'center',marginTop:20,gap:20}}>
        <Text style={{fontWeight:'700',fontSize:20,color:'#364A15'}}>Forgot your password?</Text>
        <Text style={{textAlign:'center',fontSize:14,width:320,fontWeight:'400',color:'#8F8F8F'}}>Enter your registered email below to receive password reset instruction</Text>
    </View>
    <View style={styles.mailContainer}>
        <Text style={{fontSize:16 , color:"#050F2B"}}>Email address:</Text>
        <TextInput style={{borderWidth:1,width:340,height:50,borderRadius:5 ,padding:10}} placeholder='example@gmail.com' />
    </View>
    <TouchableOpacity style={styles.btn}>
        <Text style={{fontSize:14,fontWeight:'500',color:'#FFFFFF'}}>Send</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPwd;

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
    btn:{
        width:340,
        height:50,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#364A15',
        marginTop:40,
    },
})