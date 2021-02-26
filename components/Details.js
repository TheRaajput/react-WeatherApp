import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'


const Details = () => {
    const code = "02n";
    // const dataUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=6fd9b781eb5a93e3f5a1c5e419513eb9';
    // const [weather, setData] = useState([]);
    // const [temp, setTemp] = useState([]);
    // const [place,setPlace] = useState("")
    // useEffect(()=>{
    //     fetch(dataUrl)
    //     .then(response => response.json())
    //     .then((json)=>{
    //         setPlace(json.name)
    //         setData(json.weather)
    //         setTemp(json.main)
    //     })
    //     .catch((error)=>alert(error))
    // });
    return (
        <View style={styles.details_box}>
            <View style={styles.details_holder}>
                <Image source={{uri:"http://openweathermap.org/img/wn/"+code+"@2x.png"}} style={styles.weather_img}/>
                <View>
                    <Text style={styles.place_text}>Delhi</Text>
                    <Text style={styles.temp_text}>25</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    details_box:{
        height:"30%",
        width:"100%",
        justifyContent:"center",
        alignItems:'center',
        flexDirection:"row"
    },
    details_holder:{
        height:"80%",
        width:"90%",
        backgroundColor:"#242B2E",
        opacity:0.9,
        borderRadius:15,
        flexDirection:"row",
        alignItems:'center',
    },
    weather_img:{
        height:'80%',
        width:'50%'
    },
    place_text:{
        fontSize:32,
        marginLeft:30,
        color:"#fff"
    },
    temp_text:{
        fontSize:26,
        color:'#fff',
        marginLeft:30
    }
})

export default Details