import React, { useState } from 'react'
import { Text, View ,SafeAreaView,ScrollView,Image,TouchableOpacity,StyleSheet, TextInput,Alert} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const SearchScreen = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [imageUri, setImageUri] = useState(null);

 
  const uploadFile = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({ type: 'image/*' });

      if (!result.canceled) {
        const { uri } = result;
        setImageUri(uri);
        Alert.alert('File Selected', 'File selected successfully.');
      } else {
        Alert.alert('File Selection Cancelled', 'No file selected.');
      }

    } catch (error) {
      console.error('Error uploading file:', error);
      Alert.alert('Upload Failed', 'Failed to upload file.');
    }
  };



  const handleToggle = () => {
    setIsToggled(!isToggled); 
  };

    return (
      <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <ScrollView >
      
      <View style={{flexDirection:'row',alignItems:'center',gap:10,marginTop:60,marginLeft:20,marginRight:15}}>
      <View style={{flexDirection:'row',gap:12}}>
        <Image source={require('../assets/Profile.png')} style={{height:100,width:100}}/>
      </View>
      <View>
      <Text style={{fontSize:20,fontWeight:500,color:'#364A15'}}>Welcome to Pasar click</Text>
      </View>
      </View> 

{/* Profile */}
      <View>
        <View style={{padding:20}}>
        <Text style={{fontSize:24,color:'#364A15',fontWeight:400,}}>Your Profile</Text>
        </View>
        <SafeAreaView style={{marginBottom:120}}>
        <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'column',gap:10,alignItems:'center',justifyContent:'center',borderWidth:1,borderRadius:20,width:356,height:252}}>
          <View style={{flexDirection:'row',alignItems:'center',marginLeft:-45,gap:10}}>
          <Text style={{width:80,color:'#25532B',fontSize:14,fontWeight:400}}> Full name:</Text>
          <TextInput style={{width:198,height:45,borderWidth:1,borderRadius:10,padding:10}} placeholder='Enter your name'/>
          </View>

          <View style={{flexDirection:'row',alignItems:'center',marginLeft:-45,gap:10}}>
          <Text style={{width:80,color:'#25532B',fontSize:14,fontWeight:400}}>IC Number:</Text>
          <TextInput style={{width:198,height:45,borderWidth:1,borderRadius:10,padding:10}} placeholder='A000000'/>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginLeft:-45,gap:10}}>
          <Text style={{width:80,color:'#25532B',fontSize:14,fontWeight:400}}>Mobile No:</Text>
          <TextInput style={{width:198,height:45,borderWidth:1,borderRadius:10,padding:10}} placeholder='+60(000) 0000 0000'/>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginLeft:-45,gap:10}}>
          <Text style={{width:80,color:'#25532B',fontSize:14,fontWeight:400}}>Email:</Text>
          <TextInput style={{width:198,height:45,borderWidth:1,borderRadius:10,padding:10}} placeholder='example@gmail.com'/>
        </View>
        </View>
        </View>

{/* license */}
        <View style={{padding:20}}>
        <Text style={{fontSize:24,color:'#364A15',fontWeight:400,}}>License</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'column',gap:10,borderWidth:1,borderRadius:20,width:356,height:252}}>
        
        <Text style={{fontSize:14,fontWeight:400,color:'#25532B',marginTop:10,marginLeft:10}}>Driver license:</Text>
        <View style={{alignItems:'center'}}>

        {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginTop: 20 }} />
          ) : (
        <TouchableOpacity style={{marginTop:20,width:326,height:71,borderRadius:10,borderWidth:1,justifyContent:'center',alignItems:'center',flexDirection:'row',gap:10}} onPress={uploadFile}>
            <Entypo name="plus" size={24} color="#364A15" />
            <Text style={{fontSize:12}}>Add photo of valid driver license [Front View]</Text>
        </TouchableOpacity> 
          )}
        
        {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginTop: 20 }} />
      ) : (
        <TouchableOpacity
          style={{
            marginTop: 20,
            width: 326,
            height: 71,
            borderRadius: 10,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}
          onPress={uploadFile}
        >
          <Entypo name="plus" size={24} color="#364A15" />
          <Text style={{ fontSize: 12 }}>Add photo of valid driver license [Back View]</Text>
        </TouchableOpacity>
      )}
        </View>
        </View>
        </View>

        {/* Location */}
        <View style={{padding:20}}>
        <Text style={{fontSize:24,color:'#364A15',fontWeight:400,}}>Location</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'column',gap:10,borderWidth:1,borderRadius:20,width:356,height:628}}>
        
        <Text style={{fontSize:14,fontWeight:500,color:'#364A15A6',marginTop:10,marginLeft:10}}>Enter your address:</Text>
        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>Room / Building</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>

        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>Street</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>

        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>State</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>

        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>Post Code</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>
        
        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>Bike Number</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>
        <View style={{alignItems:'center',marginTop:20}}>
        <View style={{width:260,height:84,borderRadius:20,borderWidth:1,alignItems:'center',justifyContent:'center',gap:10}}>
          <Text style={{marginTop:10,color:'#7C7C7C',fontWeight:400,fontSize:12}}>Upload your bike image</Text>

          {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginTop: 20 }} />
          ) : (  
          <TouchableOpacity style={{backgroundColor:'#DEF9EC',width:144,height:36,borderWidth:1,borderRadius:20,marginBottom:15}} onPress={uploadFile}>
            <Text style={{textAlign:'center',marginTop:8.8,color:'#364A15',width:141,height:36,fontSize:10,fontWeight:500}}>Upload any document</Text>
          </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={{marginTop:25,width:250,height:50,backgroundColor:'#364A15',justifyContent:'center',alignItems:'center',borderRadius:57}}>
          <Text style={{color:'#FFFFFF'}}>Submit</Text>
        </TouchableOpacity>
        </View>
        </View> 
        </View>

{/* /bank details */}
        <View style={{padding:20}}>
        <Text style={{fontSize:24,color:'#364A15',fontWeight:400,}}>Add Payment gateway</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'column',gap:10,borderWidth:1,borderRadius:20,width:356,height:668}}>
        
        <Text style={{fontSize:14,fontWeight:500,color:'#364A15',marginTop:10,marginLeft:10}}>Bank Account</Text>
        <Text style={{color:'#364A15A6',width:260,fontWeight:500,fontSize:10,marginLeft:10}}>Please enter your bank account details with which you are going to make payment for investment.</Text>
        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>Account Number</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>

        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>Confirm Account Number</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>

        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>Bank Name</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>

        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>IFSC Code</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>
        
        <View style={{marginTop:10,marginLeft:10,flexDirection:'column',gap:10}}>
        <Text style={{fontSize:13,fontWeight:500,color:'#364A15A6'}}>Account Type</Text>
        <TextInput style={{width:324, height:29, borderWidth:1,paddingLeft:10,borderRadius:5}}/>
        </View>
        <View style={{alignItems:'center',marginTop:20}}>
        <View style={{width:260,height:84,borderRadius:20,borderWidth:1,alignItems:'center',justifyContent:'center',gap:10}}>
          <Text style={{marginTop:10,color:'#7C7C7C',fontWeight:400,fontSize:12}}>Upload your bank document</Text>

          {imageUri ? (
          <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginTop: 20 }} />
            ) : (
          <TouchableOpacity style={{backgroundColor:'#DEF9EC',width:144,height:36,borderWidth:1,borderRadius:20,marginBottom:15}} onPress={uploadFile}>
            <Text style={{textAlign:'center',marginTop:8.8,color:'#364A15',width:141,height:36,fontSize:10,fontWeight:500}}>Upload any document</Text>
          </TouchableOpacity>
            )}
        </View>
        <TouchableOpacity style={{marginTop:25,width:250,height:50,backgroundColor:'#364A15',justifyContent:'center',alignItems:'center',borderRadius:57}}>
          <Text style={{color:'#FFFFFF'}}>Submit</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={{marginTop:55,width:350,height:50,backgroundColor:'#DEF9EC',justifyContent:'center',alignItems:'center',borderRadius:57}}>
          <Text style={{color:'#364A15'}}>Create a Account</Text>
        </TouchableOpacity>
        </View> 
        </View>        

        
        
        
        </SafeAreaView> 
        </View>
      </ScrollView>
      </SafeAreaView>
    )
  
}

export default SearchScreen; 

const styles = StyleSheet.create({
  TextScroll:{
    marginHorizontal:10, 
    flexDirection:'row', 
    borderWidth:1, 
    borderRadius:20,
    justifyContent:'center', 
    padding:10,
    marginTop:10,
},
  ActiveTab:{
    backgroundColor:'#D2F4D6',
  },
  toggleButton: {
    width:64,
    height:34,
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggledButton: {
    backgroundColor: '#D2F4D6',
  },
  buttonText: {
    fontSize: 12,
    
    color: 'black',
  },
})