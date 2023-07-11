import React from 'react';
import { View, TouchableOpacity, Image,StyleSheet, Text } from 'react-native';
//import { Ionicons } from "@expo/vector-icons";
import Header from '../component/Header';
const Home =()=>{
    return(
        
        <View >
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Categories</Text>
                <View style={styles.category}>
                    <View style ={styles.house}>
                        <Image 
                            source={require('../assets/categori/anh1.png')}
                            style={styles.anhcategory}
                        />
                        <Text style={{textAlign:'center'}}>Houses</Text>
                    </View>

                    <View style ={styles.house}>
                        <Image 
                            source={require('../assets/categori/anh2.png')}
                            style={styles.anhcategory}
                        />
                        <Text style={{textAlign:'center'}}>Apartments</Text>
                    </View>

                    <View style ={styles.house}>
                        <Image 
                            source={require('../assets/categori/anh1.png')}
                            style={styles.anhcategory}
                        />
                        <Text style={{textAlign:'center'}}>Condos</Text>
                    </View>
                </View>

                <Text style={styles.title}>Houses</Text>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                        
                            <View>
                                <Image 
                                    source={require('../assets/Houses/anh1.png')}
                                />
                                <Text style={{fontSize:19}}>One Mission Bay</Text>
                                <Text style={{fontSize:10}}>San Francisco, CA</Text>

                            </View>
                            <View>
                                <Image 
                                    source={require('../assets/Houses/anh2.png')}
                                />
                                <Text style={{fontSize:19}}>1410 Steiner St</Text>
                                <Text style={{fontSize:10}}></Text>

                            </View>
                        
                    </View> 

                    <View style={styles.sp}>
                        
                            <View>
                                <Image 
                                    source={require('../assets/Houses/anh3.png')}
                                />
                                <Text style={{fontSize:19}}>246 Sussex St</Text>
                                <Text style={{fontSize:10}}>San Francisco, CA</Text>

                            </View>
                            <View>
                                <Image 
                                    source={require('../assets/Houses/anh4.png')}
                                />
                                <Text style={{fontSize:19}}>One Mission Bay</Text>
                                <Text style={{fontSize:10}}>San Francisco, CA</Text>

                            </View>
                        
                    </View> 
                    
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{textAlign:'center', fontSize:20, color:'#20C065'}}>Show all(7) </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor: 'black'
    },
    title:{
        fontSize:28,

    },
    category:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    house:{
        borderColor:'black',
        borderWidth:0.1,
        borderRadius:3,
        width: 120,
        height:100
    }, 
    sp:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 10,
        marginVertical:10
    },
    btn:{
        borderColor:'#20C065',
        borderWidth:0.7,
        borderRadius:5,
        width:'90%',
        height:40,
        marginHorizontal:17
    },
})
export default Home;