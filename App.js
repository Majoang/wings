import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import {useState} from 'react';
import Getdetails from './Detail';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
    var imagee1=require('./441-4414526_2-breakfast-toast-sandwich-combo-white-castle-breakfast.png');
    var imagee2=require('./pngtree-breakfast-takeaway-fried-fast-food-combo-png-image_2665428.jpg');
    var imagee3=require('./Price-crunch2.jpg');

  const [totalP, setTotalprice] = useState(10);

  return (
    <View style={styles.container}>
      
      
      <Image 
                    style={{width:270, height:270,marginTop:15,borderRadius:50}}
                    source={require('./logo.png')}/>
     
       <View style={{marginTop:10,color:'#FF6F00'}}>GET DELICIOUS FOOD FROM WINGS CAFEE!!</View>
        <Text style={{fontSize:20,marginTop: 30,color:'#FF6F00'}}>We are selling food that you can enjoy  </Text>  
         <Text style={{fontSize:20,marginTop: 10,color:'#FF6F00'}}>most come and get yours</Text>   
      <View  style={styles.rectangle}>
        <TouchableOpacity>
         <Text style={{color:'red',fontSize:20,fontWeight:'bold',marginLeft:58,marginTop:10}}>COME & ENJOY FOOD</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
      <Text style={{color:'white'}}>Home</Text>
      <Ionicons name="home" size={35} color="white"/>
      
      </TouchableOpacity>

      <Text style={{fontSize: 30, fontStyle:'bold'}}>THE TOTAL PRICE IS : {totalP}</Text>
      <Getdetails picture={imagee1} name="Energy drink"  price="10.00" totalP={totalP} setTotalprice={setTotalprice} />
      <Getdetails picture={imagee2} name="Breakfast combo" price="10.00" totalP={totalP} setTotalprice={setTotalprice} />
      <Getdetails picture={imagee3} name="Lunch" price="10.00" totalP={totalP} setTotalprice={setTotalprice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDD835',
    alignItems: 'center',
    
  },
  circle:
{
  backgroundColor: 'black',
  width:200,
  height:200,
  borderRadius: 150,
  marginTop:20
},
rectangle:
{
width:350,
height:40,
borderRadius:50,
backgroundColor:'#FF9800',
marginTop:230,
marginBottom:5
},
});
