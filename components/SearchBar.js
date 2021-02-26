import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert,
    StatusBar
} from 'react-native'



const SearchBar = () => {
    const [Text, setText] = useState('');
    return (
        <View style={styles.searchBoxView}>
            <StatusBar hidden={false}/>
            <TextInput placeholder="Search" 
                placeholderTextColor="#fff" 
                style={styles.search_box} onChangeText={(Text)=>setText(Text)}>
            </TextInput>
            <TouchableOpacity style={styles.search_icon}>
            <Icon name="search" size={25} color="white" onPress={()=>Alert.alert(Text)}>
            </Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBoxView:{
        height:"20%",
        width:"100%",
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"row"
      },
      search_box:{
        height:"30%",
        width:"80%",
        borderColor:"#fff",
        backgroundColor:"black",
        borderWidth:1,
        borderRadius: 30,
        color: "#fff",
        paddingHorizontal: 15,
        fontSize:18
      },
      search_icon:{
        marginLeft:5,
        height:"35%",
        width:"8%",
        justifyContent:"center",
        alignItems:"center"
      }
});
export default SearchBar
