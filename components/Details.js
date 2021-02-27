import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'


const Details = () => {
    const dataUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=6fd9b781eb5a93e3f5a1c5e419513eb9';
    const [desc, setDesc] = useState("");
    const [temp, setTemp] = useState(0);
    const [place,setPlace] = useState("")
    const [icons,setIcon] = useState("")
    const [maxtemp,setMax] = useState(0)
    const [mintemp,setMin] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [visibility, setVis] = useState(0)
    useEffect(()=>{
        fetch(dataUrl)
        .then(response => response.json())
        .then((json)=>{
            setPlace(json.name)
            setDesc(json.weather[0].main)
            setTemp(((json.main.temp)-273).toFixed(2))
            setIcon(json.weather[0].icon)
            setMax(((json.main.temp_max)-273).toFixed(2))
            setMin(((json.main.temp_min)-273).toFixed(2))
            setHumidity(json.main.humidity)
            setVis(json.visibility)
        })
        .catch((error)=>alert(error))
    });
    return (
        <View>
            <View style={styles.details_box}>
                <View style={styles.details_holder}>
                    <Image source={{uri:"http://openweathermap.org/img/wn/"+icons+"@2x.png"}} style={styles.weather_img}/>
                    <View>
                        <Text style={styles.temp_text}>{temp+" °C"}</Text>
                        <Text style={styles.place_text}>{place}</Text>
                        <Text style={styles.weath_text}>{desc}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.other_details}>
                <View style={styles.other_details_holder}>
                    <Text style={styles.other_Text}>Other Details</Text>
                    <Text style={styles.info_text}>Max Temp:  {maxtemp+" °C"}</Text>
                    <Text style={styles.info_text}>Min Temp:  {mintemp+" °C"}</Text>
                    <Text style={styles.info_text}>Humidity:  {humidity}</Text>
                    <Text style={styles.info_text}>Visibility:  {visibility+" m"}</Text>
                    <Text style={styles.info_text}>humidity</Text>
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
        flexDirection:"row",
    },
    details_holder:{
        height:"80%",
        width:"90%",
        backgroundColor:"#242B2E",
        borderRadius:15,
        flexDirection:"row",
        alignItems:'center'
    },
    weather_img:{
        height:'80%',
        width:'50%'
    },
    place_text:{
        fontSize:22,
        marginLeft:30,
        color:"#fff",
    },
    temp_text:{
        fontSize:28,
        color:'#fff',
        marginLeft:30
    },
    weath_text:{
        color:"#fff",
        fontSize:18,
        marginLeft:30
    },
    other_details:{
        height:'60%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    other_details_holder:{
        height:'80%',
        width:'90%',
        backgroundColor:'#242B2E',
        borderRadius:30
    },
    info_text:{
        color:'#fff',
        fontSize:18,
        margin:10
    },
    other_Text:{
        color:'#fff',
        fontSize:22,
        textAlign:'center'
    }
})

export default Details