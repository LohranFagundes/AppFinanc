import React, { useState } from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function Moviments({data}) {
    const [showValue, setShowValue]=useState(false);
 return (
   <TouchableOpacity style={styles.container} onPress={()=> setShowValue(!showValue)}>
        <Text style={styles.date}> {data.date} </Text>
        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
          {showValue ? (
             <Text 
             style={data.type===1?styles.expenses : styles.value
             }> 
             {data.type===1 ? `R$ - ${data.value}`:`R$ ${data.value}`}
             </Text> 
          ):(
            <View style={styles.skeleton}>

            </View>
          )}
        </View>

   </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        marginBottom:24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#969696'
    },
    content:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 2,
    marginBottom: 8,
    },
    date:{
        color: '#D3D3D3',
        fontWeight:'bold',
    },
    label:{
        color: '#696969',
        fontWeight: 'bold',
        marginLeft: 2,
        fontSize: 16,
    },
    value:{
        color: '#40E0D0',
        fontWeight: 'bold',
        marginRight: 8,

    },
    expenses:{
        color: '#FF6347',
        fontWeight: 'bold',
        marginRight: 8,

    },
    skeleton:{
        marginTop:6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8
    }
})