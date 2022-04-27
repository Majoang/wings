import { StyleSheet, Text, View, Button} from 'react-native';
import {useState} from 'react';


export default function Contact({name,price,totalPrice,setTotalPrice}) {
    const [price, setPrice] = useState(0);
  function priceIncreasing(){
    setPrice(price + 1)
    setTotalPrice(totalPrice + 1);
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.details}>
        <Text style={{fontSize:15, fontWeight:'bold'}}>{name}</Text>
        <Text>Price: {price}</Text>
        <Button title='INCREASE PRICE' onPress={priceIncreasing} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    
  },

  
  
});
