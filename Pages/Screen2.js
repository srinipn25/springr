import React, { Component ,} from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,TouchableNativeFeedback,TouchableOpacity,View,FlatList,Image,Share} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

class Screen2 extends Component {

    state={
        date:''
    }

    componentDidMount=()=>{
        console.log("id",global.url)
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        this.setState({date:date+' '+month+','+year})
    }
    share = async () => {
        try {
          const result = await Share.share({
            message:global.url,
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
                console.log('Clicked');
            } else {
                console.log('Shared');
            }
          } else if (result.action === Share.dismissedAction) {
            console.log('Cancelled');
          }
        } catch (error) {
          alert(error.message);
        }
      };
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hdrtxt}>News</Text>
                <Image source={require('./../Images/image.png')} style={styles.touch}/>
                <TouchableOpacity style={styles.imgtxtview}>
                <Text style={styles.imgtxt}>Save Image</Text>
                </TouchableOpacity>
                <Text style={styles.descriptiontxt}>{global.description}</Text>
                <View style={styles.abovewebview}>
                <Text style={styles.abovewebviewtxt}>{global.name}</Text>
                <TouchableOpacity onPress={this.share} style={{width:'25%'}}>
                <Image source={require('./../Images/share.png')} style={styles.shareimg}/>
                </TouchableOpacity>
                <Text style={styles.abovewebviewtxt2}>{this.state.date}</Text>
                </View>
                <Text style={styles.descriptiontxt3}>{global.description}</Text>
                <Text style={styles.descriptiontxt3}>{global.description}</Text>
            </View>
        )
    }
}
export default Screen2;

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    },
    hdrtxt:{
        textAlign:'center',
        fontSize:25,
        padding:20
    },
    imgtxt:{
        textAlign:'center'
    },
    imgtxtview:{
        alignSelf:'center',
        width:'40%',
        marginTop:15,
        padding:10,
        borderWidth:3
    },
    touch:{
        width:'95%',
        alignSelf:'center',
        height:'30%'
    },
    descriptiontxt:{
        width:'95%',
        alignSelf:'center',
        fontSize:20,
        paddingVertical:10,
        paddingBottom:30,
        paddingHorizontal:10,
        lineHeight:25
    },
    abovewebview:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%',
        paddingHorizontal:10,
        alignSelf:'center'
    },
    abovewebviewtxt:{
        fontSize:20,
        color:'grey',
        width:'35%'
    },
    abovewebviewtxt2:{
        fontSize:20,
        color:'grey',
    },
    shareimg:{
        height:25,
        width:25,
        alignSelf:'center',
    },
    descriptiontxt3:{
        width:'95%',
        alignSelf:'center',
        fontSize:15,
        paddingVertical:10,
        paddingBottom:30,
        paddingHorizontal:10,
        lineHeight:20
    }
    });