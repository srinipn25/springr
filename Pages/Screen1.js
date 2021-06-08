import React, { Component } from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,TouchableNativeFeedback,TouchableOpacity,View,FlatList} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Screen1 extends Component {
    state={
        data:[]
    }
    componentDidMount=()=>{
        fetch("https://newsapi.org/v2/sources?apiKey=d29d58aab88d4ea0b04ddb245a230068",{
          method:'GET'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.status)
            if(res.status == 'ok')
             this.setState({data:res.sources})
        })
    }
    detailPage=(name,description,url)=>{
        console.log("h",name)
        global.name = name;
        global.description = description;
        global.url = url;
        Actions.Screen2()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hdrtxt}>News</Text>
                <ScrollView style={styles.scrll}>
                <FlatList data={this.state.data}
                            inverted={false}
                            renderItem={({ item, index }) =>
                 <View>
                <TouchableOpacity onPress={this.detailPage.bind(this,item.name,item.description,item.url)} style={styles.touch}/>
                <Text style={styles.descriptiontxt}>{item.description}</Text>
                </View>
             }/>     
                </ScrollView>
            </View>
        )
    }
}
export default Screen1;

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'
    },
    hdrtxt:{
        textAlign:'center',
        fontSize:25,
        padding:20
    },
    scrll:{
        paddingTop:10 
    },
    touch:{
        backgroundColor:'grey',
        width:'95%',
        alignSelf:'center',
        elevation:3,
        padding:70,
        borderRadius:5
    },
    descriptiontxt:{
        width:'95%',
        alignSelf:'center',
        fontSize:14,
        paddingVertical:10,
        paddingBottom:30,
        lineHeight:20
    }
});