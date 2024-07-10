import React, { useState } from 'react'
import { Text, View ,SafeAreaView,ScrollView,Image,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import { BarChart } from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

// Sample daily earnings data
const earningsData = {
  today: 325.23,
  week: [50, 60, 70, 80, 90, 100, 120],
  month: [205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23, 205.23]
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.5,
};
const SearchScreen = () => {
  const [isToggled, setIsToggled] = useState(true);
    
  const handleToggle = () => {
    setIsToggled(!isToggled); 
  };
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [data, setData] = useState({
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: earningsData.week,
      },
    ],
  });

  const updateChartData = (period) => {
    let labels, data;
    if (period === 'today') {
      labels = ['Today'];
      data = [earningsData.today];
    } else if (period === 'week') {
      labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      data = earningsData.week;
    } else {
      labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      data = earningsData.month;
    }
    setData({
      labels,
      datasets: [{ data }],
    });
  };

 
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
      <View style={{alignItems:'center',padding:40}}>
        <Text style={{color:'#364A15',fontSize:20}}>My Total Earning</Text>
        <Text style={{fontSize:48,fontWeight:500,color:'#364A15'}}>$14,520.25</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedPeriod === 'today' && styles.selected]}
          onPress={() => {
            setSelectedPeriod('today');
            updateChartData('today');
          }}
        >
          <Text style={styles.buttonText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedPeriod === 'week' && styles.selected]}
          onPress={() => {
            setSelectedPeriod('week');
            updateChartData('week');
          }}
        >
          <Text style={styles.buttonText}>This week</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedPeriod === 'month' && styles.selected]}
          onPress={() => {
            setSelectedPeriod('month');
            updateChartData('month');
          }}
        >
          <Text style={styles.buttonText}>This month</Text>
        </TouchableOpacity>
      </View>
      <BarChart
        data={data}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        style={styles.chart}
      />
      <Text style={styles.earningText}>My {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Earning</Text>
      <Text style={styles.earningValue}>
        ${selectedPeriod === 'today' ? earningsData.today : data.datasets[0].data.reduce((a, b) => a + b, 0).toFixed(2)}
      </Text>
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
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  selected: {
    backgroundColor: '#A0CFA0',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  chart: {
    marginBottom: 20,
  },
  earningText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  earningValue: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})