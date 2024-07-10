import React, { useState } from 'react'
import { Image, Text, View ,SafeAreaView,StyleSheet,Pressable,TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native'
import ViewDetails from './ViewDetails';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const [currentPage, setCurrentPage] =useState('page1');
   
  const Details ={
    id:'0',
    timing: '5 mins ago',
    cust_id:'#LXSW12345',
    rate:'$ 49.52',
    km:'2.5 km',
    shippingAddress1:'Shop Address: 123',
    shippingAddress2:'Main Street Anytown,',
    shippingAddress3:'USA',
    deliveryAddress1:'House Address: 456',
    deliveryAddress2:'Oak Avenue Springfield,',
    deliveryAddress3:'USA',
    button1:'View Details',
    button2:'Cancel Order',
    button3:'Cancelled',
    button4:'Delivered',
    button5:'View Status',
  };

  const navigation = useNavigation();

    const isPageActive = (page) =>{
        return currentPage === page;
    };

    const [isToggled, setIsToggled] = useState(true);
    
      const handleToggle = () => {
        setIsToggled(!isToggled); 
      };

    const renderPage = () => {
      
      switch(currentPage){
        case 'page1':
          return(
            <SafeAreaView >
            <View>
              <Text style={{fontSize:24,fontWeight:400,textAlign:'left',marginLeft:10,marginTop:20}}>Today's Orders</Text>
            </View>
            <View style={{alignItems:'center',marginTop:20}}>
            <View style={{width:373,height:213,borderWidth:1,borderRadius:10,backgroundColor:'#D2F4D6'}}>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}  onPress={() => navigation.navigate('ViewDetails')}>{Details.button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button2}</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
            <View style={{alignItems:'center',marginTop:20}}>
            <View style={{width:373,height:213,borderWidth:1,borderRadius:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}} onPress={() => navigation.navigate('ViewDetails')}>{Details.button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button2}</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
            <View style={{alignItems:'center',marginTop:20,paddingBottom:40}}>
            <View style={{width:373,height:213,borderWidth:1,borderRadius:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}} >
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}  onPress={() => navigation.navigate('ViewDetails')}>{Details.button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button2}</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
            </SafeAreaView>
          );

          case 'page2':
            return(
              <SafeAreaView >
              <View>
                <Text style={{fontSize:24,fontWeight:400,textAlign:'left',marginLeft:10,marginTop:20}}>Picked up's</Text>
              </View>
              <View style={{alignItems:'center',marginTop:20}}>
              <View style={{width:373,height:213,borderWidth:1,borderRadius:10,backgroundColor:'#D2F4D6'}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}} onPress={() => navigation.navigate('ViewDetails')}>{Details.button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button5}</Text>
                </TouchableOpacity>
                </View>
              </View>
              </View>
              <View style={{alignItems:'center',marginTop:20}}>
              <View style={{width:373,height:213,borderWidth:1,borderRadius:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}} onPress={() => navigation.navigate('ViewDetails')}>{Details.button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button5}</Text>
                </TouchableOpacity>
                </View>
              </View>
              </View>
              <View style={{alignItems:'center',marginTop:20,paddingBottom:40}}>
              <View style={{width:373,height:213,borderWidth:1,borderRadius:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}} onPress={() => navigation.navigate('ViewDetails')}>{Details.button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button5}</Text>
                </TouchableOpacity>
                </View>
              </View>
              </View>
              </SafeAreaView>
            );

          case 'page3':
            return(
              <SafeAreaView >
              <View>
                <Text style={{fontSize:24,fontWeight:400,textAlign:'left',marginLeft:10,marginTop:20}}>Completed</Text>
              </View>
              <View style={{alignItems:'center',marginTop:20}}>
              <View style={{width:373,height:213,borderWidth:1,borderRadius:10,backgroundColor:'#D2F4D6'}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <View style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}} onPress={() => navigation.navigate('ViewDetails')}>{Details.button1}</Text>
                </View>
                <View style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button4}</Text>
                </View>
                </View>
              </View>
              </View>
              <View style={{alignItems:'center',marginTop:20}}>
              <View style={{width:373,height:213,borderWidth:1,borderRadius:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <View style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}} onPress={() => navigation.navigate('ViewDetails')}>{Details.button1}</Text>
                </View>
                <View style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button4}</Text>
                </View>
                </View>
              </View>
              </View>
              <View style={{alignItems:'center',marginTop:20,paddingBottom:40}}>
              <View style={{width:373,height:213,borderWidth:1,borderRadius:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}} onPress={() => navigation.navigate('ViewDetails')}>{Details.button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button4}</Text>
                </TouchableOpacity>
                </View>
              </View>
              </View>
              </SafeAreaView>
            );

          case 'page4':
            return(
              <SafeAreaView >
              <View>
                <Text style={{fontSize:24,fontWeight:400,textAlign:'left',marginLeft:10,marginTop:20}}>Cancelled Orders</Text>
              </View>
              <View style={{alignItems:'center',marginTop:20}}>
              <View style={{width:373,height:213,borderWidth:1,borderRadius:10,backgroundColor:'#D2F4D6'}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:20,marginRight:40}}>
                <View style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button3}</Text>
                </View>
                </View>
              </View>
              </View>
              <View style={{alignItems:'center',marginTop:20}}>
              <View style={{width:373,height:213,borderWidth:1,borderRadius:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:20,marginRight:40}}>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button3}</Text>
                </TouchableOpacity>
                </View>
              </View>
              </View>
              <View style={{alignItems:'center',marginTop:20,paddingBottom:40}}>
              <View style={{width:373,height:213,borderWidth:1,borderRadius:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.timing}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.cust_id}</Text>
                  <Text style={{fontSize:12,fontWeight:500,color:'#364A15'}}>{Details.rate}</Text>
                </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <View>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress1}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress2}</Text>
                  <Text style={{textAlign:'left',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.shippingAddress3}</Text>
                </View>
                <View>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress1}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress2}</Text>
                  <Text style={{textAlign:'right',fontSize:10,fontWeight:500,color:'#364A15'}}>{Details.deliveryAddress3}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:20,marginRight:40}}>
                <TouchableOpacity style={{width:121,height:40,borderWidth:1,borderRadius:20,justifyContent:'center',backgroundColor:'#F2EBD9'}}>
                  <Text style={{textAlign:'center',fontSize:12,fontWeight:400,color:'#364A15'}}>{Details.button3}</Text>
                </TouchableOpacity>
                </View>
              </View>
              </View>
              </SafeAreaView>
            );
      }
    }

    return (
      <SafeAreaView style={{backgroundColor:'white',flex:1}}>
        <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:60,marginLeft:20,marginRight:15}}>
        <View style={{flexDirection:'row',gap:12}}>
          <Image source={require('../assets/Profile.png')} style={{height:50,width:50}}/>
            <View style={{marginTop:10}}>
              <Text style={{color:'#364A1580',fontSize:12,fontWeight:500}}>Good morning</Text>
              <Text style={{fontSize:16,fontWeight:500,color:'#364A15'}}>Gutabo frank</Text>
            </View>
        </View>
        <TouchableOpacity style={[styles.toggleButton, isToggled && styles.toggledButton]} onPress={handleToggle}>
          <Text style={styles.buttonText}>{isToggled ? 'ON' : 'OFF'}</Text>
        </TouchableOpacity>
        </View>
        <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection:'row', gap:4, alignItems:'center', marginTop:20,marginLeft:10,paddingBottom:10}}>
        <Pressable style={[styles.TextScroll,isPageActive('page1') && styles.ActiveTab]} onPress={() => setCurrentPage('page1')}>
            <Text>New Orders</Text>
        </Pressable>
        <Pressable style={[styles.TextScroll,isPageActive('page2') && styles.ActiveTab]} onPress={() => setCurrentPage('page2')}>
            <Text>Picked up</Text>
        </Pressable>
        <Pressable style={[styles.TextScroll,isPageActive('page3') && styles.ActiveTab]} onPress={() => setCurrentPage('page3')}>
            <Text>Completed</Text>
        </Pressable>
        <Pressable style={[styles.TextScroll,isPageActive('page4') && styles.ActiveTab]} onPress={() => setCurrentPage('page4')}>
            <Text>Cancel</Text>
        </Pressable>
        </View>
        </ScrollView>
        </View>
          {renderPage()}
        </ScrollView>
      </SafeAreaView>
    )
}

export default HomeScreen

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