import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>

     </View>
         <Text style={styles.text}>DELICIOUS FOOD AT LOW PRICES</Text>
         <Text>Get delicious food at low price at our cafee 
               and enjoy!!
         </Text>
      <View style={styles.rec}>
        <TouchableOpacity>
         <Text style={styles.footer}> ENJOY THE APP</Text>
         </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AB47BC',
    borderRadius:8,
    alignItems:'center'
    
  },

  circle:
  {
    
    width:300,
    height:300,
    borderRadius:150,
    backgroundColor:'white',
    marginTop:30
    
  },
  rec:
  {  
    
    width:300,
    height:50,
    borderRadius:10,
    alignItems:'center',
    backgroundColor:'white',
    marginTop:245,
  
  },
  text:
  {
    marginTop:40,
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20
  },
  footer:
  {
    fontSize:30,
  fontWeight:'bold',
  marginTop:16
  }
});
