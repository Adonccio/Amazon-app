
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AmazonLogo from '../src/media/amazon_logo.png'
import PrimeVideoLogo from '../src/media/prime_video.png'
import TheWheel from '../src/media/movies/the_wheel_of_time.png'
import TheWheelMini from '../src/media/movies/wheel_of_time.png'
import Inception from '../src/media/movies/inception.png'
import DarkKnight from '../src/media/movies/dark-knight.png'
import Sherlock from '../src/media/movies/sherlock_holmes.png'
import American from '../src/media/movies/american.png'
import English from '../src/media/movies/English.png'
import Hindi from '../src/media/movies/Hindi.png'
import Telugu from '../src/media/movies/Telugu.png'

export default function Home () {
    return <>
    
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.PrimeImg} source={PrimeVideoLogo}/>
            <Image style={styles.AmazonImg} source={AmazonLogo}/>
        </View>
        <View style={styles.menubar}>
            <TouchableOpacity>
            <Text style={styles.categorytext}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.categorytext}>Shows</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.categorytext}>Filmes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.categorytext}>Infantil</Text>
            </TouchableOpacity>
        
        </View>
        <ScrollView>
        <TouchableOpacity>
            <Image source={TheWheel} style={styles.moviewheel}></Image>
        </TouchableOpacity>
        <View>
            <Text style={styles.categorytitle}>Continue Assistindo</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.continueass}>
                <TouchableOpacity>
                    <Image source={TheWheelMini}/>
                    </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image source={Inception}/>
                    </TouchableOpacity>
                
            </View>
            </ScrollView>
        </View>
        <View>
            <Text style={styles.categorytitle}>Filmes de Crime</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.continueass}>
                <TouchableOpacity>
                    <Image source={DarkKnight}/>
                    </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image source={Sherlock}/>
                    </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Inception}/>
                    </TouchableOpacity>
            </View>
            </ScrollView>
            <View>
            <Text style={styles.categorytitle}>Assista na Sua Língua</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.continueass}>
                <TouchableOpacity>
                    <Image source={English}/>
                    </TouchableOpacity>
                
                    <TouchableOpacity>
                    <Image source={Hindi}/>
                    </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Telugu}/>
                    </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
        </View>
        </ScrollView>
        
    </View>
    </>
}

const styles = StyleSheet.create(
    {
    container: {
            flex : 1,
            backgroundColor: '#232f3e',
        }
    ,
    header: {
        alignItems: 'center',
        marginBottom: 15,
    },
    categorytext: {
        color: '#fff'
    },
    PrimeImg: {
        marginTop: 40
    },
    AmazonImg : {
        marginLeft: 30,
        marginTop: -35
    },
    menubar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 15
    },
    moviewheel:{ 
        width:  '100%',
        marginTop: 10,
        alignItems: 'center'
    },
    continueass: {
        flexDirection: 'row',
        gap: 20,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        
    },
    categorytitle: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10,
        marginLeft: 10,
        color:'white'
    }
    }
)