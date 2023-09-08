import * as React from "react";
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import tailwind from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import QuranContext from "../QuranContext";

import { Audio } from "expo-av";
const ListeningPage = ({navigation}) => {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTrack, setCurrentTrack] = React.useState(null);
  const [SurahToPlay, setSurahToPlay] = React.useState({
    name:'',
    link:null});
    const [isLoading, setIsLoading] = React.useState(false);
  const {Quran,setQuran}=React.useContext(QuranContext)

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  const playSound = async (num) => {
    console.log(num)
    if (sound) {
      // Pause the current track if one is playing
      setIsPlaying(false)
      await sound.pauseAsync();
      await sound.unloadAsync();
     
    }
    setIsLoading(true)
    const { sound: newSound } = await Audio.Sound.createAsync({uri:`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${num}.mp3`},
    {
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      playThroughEarpieceAndroid: false
   }
    );
    setSound(newSound);
    setCurrentTrack(num);
    await newSound.playAsync();
    setIsLoading(false);
    setIsPlaying(true)
    
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  return (
    <SafeAreaView style={tailwind`bg-[#00c77f] w-full h-full`}>
      <Text style={tailwind`font-bold text-xl text-white text-center p-2`} >My Quran</Text>
      <View style={tailwind`bg-white items-center flex flex-row-reverse justify-center rounded-full m-4`}>
      <Text style={tailwind`bg-[#00c77f] p-2 rounded-full m-2 flex-1 text-center`}>Listen</Text>
      <Pressable
        style={tailwind` p-4`}
        onPress={() => navigation.navigate('HomereadingPage')}
      >
        <Text style={tailwind`text-[#00c77f] px-4`} >Read</Text>
      </Pressable>
      </View>
      {SurahToPlay.name && <View style={tailwind`bg-white rounded-xl m-4 p-4`}>
        <Text style={tailwind`text-center font-bold text-xl text-black`}>{SurahToPlay.name}</Text>
        <TouchableOpacity onPress={!isPlaying?()=>playSound(SurahToPlay.link):()=>pauseSound()} style={tailwind`items-center  rounded-full  `}>
          {!isLoading?(<Text style={tailwind`bg-gray-200 p-4 rounded-xl`}>{!isPlaying?'Play':'Pause'}</Text>):(<Text>Please wait ...</Text>)}
        </TouchableOpacity>
      </View>}
      <ScrollView style={tailwind`p-2`}>
        {Quran&&Quran.map((surah,index)=>(
          <TouchableOpacity onPress={!isPlaying?()=>setSurahToPlay({name:surah.name,link:surah.number}):()=>{setSurahToPlay({name:surah.name,link:surah.number});pauseSound()}} key={index} style={tailwind`bg-white shadow  rounded-xl m-1 p-4 flex flex-row items-center justify-between`}>
          <Text >{surah.name}</Text>
          <Text>({surah.englishName})</Text>
        </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListeningPage