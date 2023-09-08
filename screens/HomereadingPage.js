import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView, Button } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import QuranContext from "../QuranContext";
import tailwind from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";


const HomereadingPage = ({navigation}) => {
  const {Quran,setQuran}=React.useContext(QuranContext)
  return (
    <SafeAreaView style={tailwind`bg-[#00c77f] w-full h-full`}>
      <Text style={tailwind`font-bold text-xl text-white text-center p-2`} >My Quran</Text>
      <View style={tailwind`bg-white items-center flex flex-row justify-center rounded-full m-4`}>
      <Text style={tailwind`bg-[#00c77f] p-2 rounded-full m-2 flex-1 text-center `}>Read</Text>
      <Pressable
        style={tailwind`p-4 z-4`}
        color='white'
        onPress={() =>navigation.navigate('Listening')}
        title="Lsiten"
      >
        <Text style={tailwind`text-[#00c77f] px-4`} >Listen</Text>
      </Pressable>
      </View>

      <ScrollView style={tailwind`p-2`}>
        {Quran&&Quran.map((surah,index)=>(
          <View key={index} style={tailwind`bg-white shadow  rounded-xl m-1 p-4 flex flex-row items-center justify-between`}>
          <Text >{surah.name}</Text>
          <Text>({surah.englishName})</Text>
          <Pressable  onPress={() =>navigation.navigate('ReadingASurah',{surah}) }>
            <Image
             style={tailwind`w-8 h-8 text-gray-400`}
              contentFit="cover"
              source={require("../assets/eye.png")}
            />
          </Pressable>
        </View>
        ))}
      </ScrollView>
    
     
    </SafeAreaView>
  );
};



export default HomereadingPage;
