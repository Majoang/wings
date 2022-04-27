import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import Contact from ' ./Contact';


export default function App() {
    
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20, marginTop:10}}>THE TOTAL PRICE IS : </Text>
        <Contact name='snaks' price='1.00' totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                
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

    
});
