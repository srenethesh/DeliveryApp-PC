import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Switch,
  StatusBar,
  useWindowDimensions,
  Image,
  TouchableOpacity
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import "react-native-gesture-handler";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { FontAwesome6 } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ViewDetails = () => {
  const [device, setDevice] = useState(true);
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["25%", "48%", "75%"];
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [showVerifyProduct, setShowVerifyProduct] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [activityStatus, setActivityStatus] = useState({
    reachedShop: false,
    pickedOrder: false,
    verifyProduct: false,
    reachedLocation: false,
    markedDelivered: false,
  });
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };
  const darkModeMapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (initialRegion) {
      bottomSheetModalRef.current?.present();
      setIsOpen(true);
    }
  }, [initialRegion]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
       
        <View style={styles.container}>
          <StatusBar style="auto" />
          {initialRegion && (
            <MapView
              style={styles.map}
              initialRegion={initialRegion}
              customMapStyle={darkModeMapStyle}
            >
              {currentLocation && (
                <Marker
                  coordinate={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                  }}
                  title="Your Location"
                />
              )}
            </MapView>
          )}
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 20 }}
            enablePanDownToClose={false}
          >
             <ScrollView>
            <View style={styles.contentContainer}>
              <Text style={styles.header}>Order Details</Text>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Pick up location</Text>
                <View style={styles.row}>
                  <Image
                    source={{ uri: "https://via.placeholder.com/60" }} // Replace with actual image source
                    style={styles.locationImage}
                  />
                  <View style={{flexDirection:'column',gap:7}}>
                    <Text style={styles.locationText}>ALTA Green</Text>
                    <Text style={styles.addressText}>
                      Shop Address: 123 Main Street Anytown, Malaysia
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',marginLeft:60}}>
                  <TouchableOpacity style={{width:50,height:50,backgroundColor:'#FFFFFF',borderRadius:50}}>
                    <Feather name="phone-call" size={24} color="#364A15" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{width:50,height:50,backgroundColor:'#FFFFFF',borderRadius:50}}>
                  <FontAwesome6 name="location-crosshairs" size={24} color="#364A15" />
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Order Details</Text>
                <View style={styles.orderItem}>
                  <Image
                    source={{ uri: "https://via.placeholder.com/50" }} // Replace with actual image source
                    style={styles.orderImage}
                  />
                  <View style={{flexDirection:'column',display:'flex'}}>
                  <Text style={styles.orderText}>
                    Korean Jeju Island Fresh Potato 3kg 
                  </Text>
                  <Text style={styles.orderText1}>250gm, Price </Text>
                  </View>
                  <Text style={{marginLeft:'30%',fontSize:14,fontWeight:400,color:'#364A15'}}>$3.99</Text>
                </View>
                <View style={styles.orderItem}>
                  <Image
                    source={{ uri: "https://via.placeholder.com/50" }} // Replace with actual image source
                    style={styles.orderImage}
                  />
                  <View style={{flexDirection:'column',display:'flex'}}>
                  <Text style={styles.orderText}>Fresh Potato 3kg</Text>
                  <Text style={styles.orderText1}>250gm, Price </Text>
                  </View>
                  <Text style={{marginLeft:'30%',fontSize:14,fontWeight:400,color:'#364A15'}}>$3.99</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
                <Text style={styles.amountText}>
                  Amount to be collected: 
                </Text>
                <Text style={styles.amountPrice}>$8.99</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
                <Text style={styles.earningsText}>Your earnings:</Text>
                <Text style={styles.earningsPrice}>$2.99</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
                <Text style={styles.paymentMethodText}>
                  Payment Method: 
                </Text>
                <Text style={styles.paymentMethod}>Cash on delivery</Text>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Delivery Details</Text>
                <View style={styles.column}>
                  <View style={{flexDirection:'column'}}>                  
                  <Text style={styles.deliveryText}>Amelia Barlow</Text>
                  <Text style={styles.phoneText}>+00 00000 00000</Text>
                  <Text style={styles.addressText}>
                    House Address: 456 Oak Avenue Springfield, USA
                  </Text>
                  </View>
                  <View style={{flexDirection:'row',marginLeft:60}}>
                  <TouchableOpacity style={{width:50,height:50,backgroundColor:'#FFFFFF',borderRadius:50}}>
                    <Feather name="phone-call" size={24} color="#364A15" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{width:50,height:50,backgroundColor:'#FFFFFF',borderRadius:50}}>
                  <FontAwesome6 name="location-crosshairs" size={24} color="#364A15" />
                  </TouchableOpacity>
                  </View>
                </View>

              </View>
              
            
            <View style={styles.contentContainers}>
                {!showVerifyProduct ? (
                  <>
                    <TouchableOpacity style={styles.button} onPress={() => setShowVerifyProduct(true)}>
                      <Feather style={{ marginLeft: 10 }} name="box" size={30} color="#364A15" />
                      <Text style={styles.buttonText}>Accept the order</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <View style={styles.verifyContainers}>
                    <Text style={styles.verifyHeader}>Verify the Product</Text>
                    <View style={styles.verifyContent}>
                    {!imageUri ? (
                        <TouchableOpacity style={styles.addImage} onPress={pickImage}>
                          <Entypo name="plus" size={24} color="#364A15" />
                          <Text style={{color:'#364A15'}}>Add Image</Text>
                        </TouchableOpacity>
                      ) : (
                        <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
                      )}
                      <TouchableOpacity style={styles.submitProof}>
                        <Text style={{color:'#364A15',fontSize:16,fontWeight:'400'}}>Submit the proof</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.activity}>
                      <Text style={styles.activityHeader}>Your Activity</Text>
                      <View style={styles.activityItem}>
                      <View style={[styles.iconbg,{backgroundColor:activityStatus.reachedShop?'#D2F4D6':'#D4D4D480'}]}><Entypo name="shop" size={26 } color="#364A15" /></View>
                        <Text style={{color:'#364A15'}}>Reached the shop</Text>
                        <CheckBox
                          checked={activityStatus.reachedShop}
                          checkedColor="#1DC9A0"
                          onPress={() => setActivityStatus({ ...activityStatus, reachedShop: !activityStatus.reachedShop })}
                        />
                      </View>
                      <View style={styles.activityItem}>
                      <View style={[styles.iconbg,{backgroundColor:activityStatus.pickedOrder?'#D2F4D6':'#D4D4D480'}]}><AntDesign name="CodeSandbox" size={27} color="#364A15" /></View>
                        <Text style={{color:'#364A15'}}>Picked up the Order</Text>
                        <CheckBox
                          checked={activityStatus.pickedOrder}
                          checkedColor="#1DC9A0"
                          onPress={() => setActivityStatus({ ...activityStatus, pickedOrder: !activityStatus.pickedOrder })}
                        />
                      </View>
                      <View style={styles.activityItem}>
                      <View style={[styles.iconbg,{backgroundColor:activityStatus.verifyProduct?'#D2F4D6':'#D4D4D480'}]}><Octicons name="verified" size={24} color="#364A15" /></View>
                        <Text style={{color:'#364A15'}}>Verify the Product</Text>
                        <CheckBox
                          checked={activityStatus.verifyProduct}
                          checkedColor="#1DC9A0"
                          onPress={() => setActivityStatus({ ...activityStatus, verifyProduct: !activityStatus.verifyProduct })}
                        />
                      </View>
                      <View style={styles.activityItem}>
                      <View style={[styles.iconbg,{backgroundColor:activityStatus.reachedLocation?'#D2F4D6':'#D4D4D480'}]}><MaterialIcons name="location-on" size={24} color="#364A15" /></View>
                        <Text style={{color:'#364A15'}}>Reached the Location</Text>
                        <CheckBox
                          checked={activityStatus.reachedLocation}
                          checkedColor="#1DC9A0"
                          onPress={() => setActivityStatus({ ...activityStatus, reachedLocation: !activityStatus.reachedLocation })}
                        />
                      </View>
                      <View style={styles.activityItem}>
                        <View style={[styles.iconbg,{backgroundColor:activityStatus.markedDelivered?'#D2F4D6':'#D4D4D480'}]}><Feather name="box" size={28} color="#364A15" /></View>
                        <Text style={{color:'#364A15'}}>Marked as Delivered</Text>
                        <CheckBox
                          checked={activityStatus.markedDelivered}
                          checkedColor="#1DC9A0"
                          onPress={() => setActivityStatus({ ...activityStatus, markedDelivered: !activityStatus.markedDelivered })}
                        />
                      </View>
                    </View>
                  </View>
                )}
              </View>
              </View>
            </ScrollView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    padding: 16,
    alignItems: "center",
  },
  contentContainers: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
    color:'#364A15'
  },
  section: {
    width: "100%",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
    color:'#364A15'
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column:{
    flexDirection:'row',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#364A1580',
    padding:10,
    justifyContent:'space-between',
  },
  locationImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
    width:141,
    color:'#364A15'
  },
  addressText: {
    fontSize: 12,
    color: "#364A15",
    width:141,
    marginTop:5
  },
  orderItem: {
    flexDirection: "row", 
    alignItems: "center",
    marginBottom: 10,
    borderWidth:1,
    padding:10,
    borderRadius:10,
    borderColor:'#364A152E'
  },
  orderImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  orderText: {
    fontSize: 14,
    fontWeight:'400',
    width:141,
    color:'#364A15'
  },
  orderText1: {
    fontSize: 14,
    fontWeight:'400',
    width:141,
    color:'#7C7C7C'
  },
  amountText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    color:'#364A15'
  },
  amountPrice: {
    fontSize: 14,
    fontWeight: "300",
    marginTop: 10,
    color:'#364A15'
  },
  earningsText: {
    fontSize: 14,
    fontWeight: "bold",
    color:'#364A15'
  },
  earningsPrice: {
    fontSize: 14,
    fontWeight: "300",
    color:'#364A15',
   
  },
  paymentMethodText: {
    fontSize: 14,
    fontWeight: "bold",
   color:'#364A15'
  },
  paymentMethod: {
    fontSize: 14,
    fontWeight: "300",
    color:'#364A15'
  },
  deliveryText: {
    fontSize: 16,
    fontWeight:"500",
    color:'#364A15',
  },
  phoneText: {
    fontSize: 12,
    marginTop: 5,
    color:'#364A15',
  }, 
  button: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width:354,
    height:80,
    alignItems: "center",
    justifyContent: 'flex-start',
    marginTop: 20,
    borderWidth:1,
    flexDirection:'row',
    gap:67,
  },
  buttonText: {
    fontSize: 18,
    color: "#364A15",
    fontWeight: "400",
    marginLeft:-10,
  },
  verifyHeader:{
    fontSize:18,
    color:'#364A15',
    fontWeight:'400',
  },
  verifyContent:{
    width:360,
    height:192,
    alignItems:'center',
    borderWidth:1,
    borderRadius:20,
    marginTop:10,
    borderColor:'#D9D9D9'
  },
  addImage:{
    width:342,
    height:70,
    alignItems:'center',
    borderWidth:1,
    justifyContent:'center',
    borderRadius:10,
    borderStyle:'dashed',
    borderColor:'#9E9E9E40',
    marginTop:20,
    flexDirection:'row',
    gap:10,
  },
  submitProof:{
    width:300,
    height:60,
    borderWidth:1,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#364A15',
    marginTop:20
  },
  activity: {
    width: '100%',
  },
  activityHeader: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
    color:'#364A15',
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconbg:{
    width:50,
    height:50,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  iconbgchange:{
    width:50,
    height:50,  
    borderRadius:50,
    justifyContent:'center',
  },
  uploadedImage: {
    width: '100%',
    height: 200,
    marginBottom:90,
  },
});

export default ViewDetails;
