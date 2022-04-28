import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {useState} from 'react'

export default function Getdetails({name, price,picture, totalP, setTotalprice}) {
  const [prices, setAge] = useState(0);
  function Increaseprice(){
    setAge(prices + 1)
    setTotalprice(totalP + 1);
  }
  return (
    <View style={{backgroundColor:'#FFA000',width: '100%',height:200}}>
    <View style={styles.container}>
                   <Image 
                    style={styles.image}
                    source={picture}/>
                   <View style={{marginLeft:12}}>
                   <Text style={{fontSize:18, fontWeight:'bold'}}>{name}</Text>
                   <Text>PRICE: {prices}</Text>
                   <Text> PRICE: {price}</Text>
                   <Button title="INCREASE THE PRICE" onPress={Increaseprice} />
                   </View>


                   
    </View>
    </View>



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
    backgroundColor:'#FF9800'
  },

  image: {
    height: 100,
    width: 100,
  },
 
})