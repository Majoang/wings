import { StyleSheet, Text, View,TouchableOpacity,Image, ScrollView, TextInput } from 'react-native';
import {useState} from 'react';
import Getdetails from './Detail';
import { Ionicons,Entypo } from '@expo/vector-icons';



export default function App() {
    var imagee1=require('./441-4414526_2-breakfast-toast-sandwich-combo-white-castle-breakfast.png');
    var imagee2=require('./pngtree-breakfast-takeaway-fried-fast-food-combo-png-image_2665428.jpg');
    var imagee3=require('./Price-crunch2.jpg');
    var imagee4=require('./drinks.png');
    var imagee5=require('./lunch food.jpg');
    var imagee6=require('./motoho.jpg');
    var imagee7=require('./water.png');

  const [totalP, setTotalprice] = useState(0);

  return (
    <ScrollView>
    <View style={styles.container}>
      
      
      <Image 
                    style={{width:270, height:270,marginTop:15,borderRadius:50}}
                    source={require('./logo.png')}/>
     
       
       <Text style={{marginTop:10,color:'#FF6F00'}}>GET DELICIOUS FOOD FROM WINGS CAFEE!!</Text>
        <Text style={{fontSize:20,marginTop: 30,color:'#FF6F00'}}>We are selling food that you can enjoy  </Text>  
        
        
         <Text style={{fontSize:20,marginTop: 10,color:'#FF6F00',marginBottom:239}}>Come and get yours</Text>   
      
         <TextInput style={{borderStyle:'solid',borderWidth:5,width:200,borderColor: 'red',}}
         placeholder='SEARCH FOOD'
         onChangeText={(Text)=>(Text)}
         />
        
      
      <TouchableOpacity>
      <Text style={{color:'white'}}>Home</Text>
      <Ionicons name="home" size={35} color="white"/>
      
      </TouchableOpacity>

      <Text style={{fontSize: 30, fontStyle:'bold'}}>THE TOTAL PRICE IS : M{totalP}</Text>
      <Getdetails picture={imagee1} name="Breakfast combo1"  price={40} totalP={totalP} setTotalprice={setTotalprice} />
      <Getdetails picture={imagee2} name="Breakfast combo2" price={30} totalP={totalP} setTotalprice={setTotalprice} />
      <Getdetails picture={imagee3} name="SNAKS" price={2} totalP={totalP} setTotalprice={setTotalprice} />
      <Getdetails picture={imagee4} name="Soft Drinks " price={20} totalP={totalP} setTotalprice={setTotalprice} />
      <Getdetails picture={imagee5} name="LUNCH FOOD " price={25} totalP={totalP} setTotalprice={setTotalprice} />
      <Getdetails picture={imagee6} name="MOTOHO " price={12} totalP={totalP} setTotalprice={setTotalprice} />
      <Getdetails picture={imagee7} name="WATER " price={8} totalP={totalP} setTotalprice={setTotalprice} />
      <TouchableOpacity>
      <Entypo name="arrow-bold-down" size={35} color="white"/>
      </TouchableOpacity>
      <View style={styles.rec}>
      <Text style={{color:'red',fontSize:20,fontWeight:'bold',marginLeft:85,marginTop:10}}>YOUR WELCOME</Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDD835',
    alignItems: 'center',
    marginTop:30
    
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
rec:
{
 backgroundColor:'#FF9800',
 width:350,
height:40,
marginTop:8,
borderRadius:50
},
});
