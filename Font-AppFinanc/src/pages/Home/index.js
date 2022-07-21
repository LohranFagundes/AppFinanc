import React from "react";
import {} from 'react-native';
import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from '../../components/Header';
import Balance from "../../components/Balance";
import Moviments from "../../components/Moviments";
import Actions from "../../components/Actions";


const list =[
    {
    id:1,
    label: 'Boleto Luz',
    value: '150,00',
    date: '25/07/2022',
    type: 1 //saidas=1//entradas=0
    },
    {
    id:2,
    label: 'Financiamento casa',
    value: '200,00',
    date: '05/07/2022',
    type: 1 //saidas=1//entradas=0
        },
    {
    id:3,
    label: 'Parcela XX do app',
    value: '550,00',
    date: '20/07/2022',
    type: 0 //saidas=1//entradas=0
    },

]

export default function Home (){
    return (
        <View style={styles.container}>
            <Header name="Lohran Fagundes"/>

            <Balance saldo="1.000,00" gastos="-350,00"/>

            <Actions/>

            <Text style={styles.title}>Últimas movimentações</Text>
            
            <FlatList style={styles.list}
            data={list}
            keyExtractor={(item)=>String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><Moviments data={item}/>}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F2F2F2',
    },

    title:{
        fontSize:18,
        fontWeight: 'bold',
        margin:16,
    },
    list

})