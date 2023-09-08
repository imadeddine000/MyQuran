import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "twrnc";
import { ScrollView } from "react-native-gesture-handler";

const RedingASurah = ({navigation,route}) => {
  console.log(route.params.surah.ayahs[0])
  return (
    <SafeAreaView style={tailwind`bg-[#00c77f] w-full h-full`} >
     <View style={tailwind`flex items-center  `}>
     <Text style={tailwind`text-white  text-center text-xl p-2`}>{route.params.surah.name}</Text>
      <Pressable
        style={tailwind`w-8 h-8 absolute top-2 left-0`}
        onPress={() => navigation.navigate('HomereadingPage')}
      >
        <Image
          style={tailwind`w-8 h-8`}
          contentFit="cover"
          source={require("../assets/left-arrow.svg")}
        />
      </Pressable>
     </View>
      <ScrollView style={tailwind` bg-white p-2`}>
        <Text>
        {route.params.surah&&route.params.surah.ayahs.map((ayah,index)=>(
         <Text key={index}>
        {ayah.text}
        <Text style={tailwind` text-xl font-bold rounded-full`}>{ayah.numberInSurah}</Text>
        </Text>
        ))}
       
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentPosition: {
    left: 32,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.amiriQuranColored,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  alFatihah: {
    top: 49,
    left: 140,
    fontSize: 24,
    fontFamily: FontFamily.kanitRegular,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  leftArrow: {
    top: 50,
    width: 35,
    height: 35,
  },
  text: {
    top: 17,
    left: 169,
  },
  text1: {
    top: 22,
    left: 23,
  },
  parent: {
    top: 147,
    borderRadius: 6,
    width: 324,
    height: 360,
    overflow: "hidden",
  },
  redingASurah: {
    backgroundColor: "#00c77f",
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default RedingASurah;
