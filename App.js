const Stack = createNativeStackNavigator();
import * as React from "react";
import { useState,useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomereadingPage from "./screens/HomereadingPage";
import QuranContext from './QuranContext'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import ListeningPage from "./screens/ListeningPage";
import RedingASurah from "./screens/RedingASurah";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [Quran,setQuran]=useState([])
  
  const [fontsLoaded, error] = useFonts({
    "Kanit-Regular": require("./assets/fonts/Kanit-Regular.ttf"),
  });
  useEffect(()=>{
    const getData=()=>{
      const jsonData = require('./assets/ar.alafasy.json');
      console.log(jsonData.data.surahs[0].name)
      setQuran(jsonData.data.surahs)
    
    }
    return getData()
  },[])
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <QuranContext.Provider value={{Quran,setQuran}}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomereadingPage"
              component={HomereadingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Listening"
              component={ListeningPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReadingASurah"
              component={RedingASurah}
              options={{ headerShown: false }}
            />
           
          </Stack.Navigator>
          </QuranContext.Provider>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
