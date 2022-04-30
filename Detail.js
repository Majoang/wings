import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import {useState} from 'react'

export default function Getdetails({name, price,picture, totalP, setTotalprice}) {
  const [prices, setAge] = useState(0);
  function BUY_ITERMS(){
    
    setTotalprice(totalP + price);
  }
  function DEDUCT_ITERM(){
    
    setTotalprice(totalP -price);
  }
  return (
    <ScrollView>
    <View style={{backgroundColor:'#FFA000',width: '100%',height:200}}>
    <View style={styles.container}>
                   <Image 
                    style={styles.image}
                    source={picture}/>
                   <View style={{marginLeft:12}}>
                   <Text style={{fontSize:18, fontWeight:'bold'}}>{name}</Text>
                   <Text>PRICE : M{prices}</Text>
                   <Text> ACTUAL PRICE : M{price}</Text>
                   <View style={{marginBottom:2,}}>
                   <Button title="BUY ITERMS" onPress={BUY_ITERMS} />
                   </View>
                   <Button title="DEDUCT ITERM" onPress={DEDUCT_ITERM} />
                   </View>


                   
    </View>
    </View>
    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#999',
    borderStyle:'dashed',
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor:'#FF9800',
    width:330,
    height:175,
    marginBottom:8
  },

  image: {
    height: 140,
    width: 140,
    borderRadius:8,
    borderStyle:'solid',
    borderWidth:5,
    borderColor:'#BF360C'
  },
 
})