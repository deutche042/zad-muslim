import React, {useEffect, useState} from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from './constants/theme';

// Screens
import HomeScreen from './screens/HomeScreen';
import QuranScreen from './screens/QuranScreen';
import PrayerScreen from './screens/PrayerScreen';
import AzkarScreen from './screens/AzkarScreen';
import MoreScreen from './screens/MoreScreen';

// Detail Screens
import QuranReaderScreen from './screens/QuranReaderScreen';
import QiblaScreen from './screens/QiblaScreen';
import HadithScreen from './screens/HadithScreen';
import RadioScreen from './screens/RadioScreen';
import SettingsScreen from './screens/SettingsScreen';
import SalawatScreen from './screens/SalawatScreen';
import NamesScreen from './screens/NamesScreen';
import TasbeehCounterScreen from './screens/TasbeehCounterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'الرئيسية':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'القرآن':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'الصلاة':
              iconName = focused ? 'time' : 'time-outline';
              break;
            case 'الأذكار':
              iconName = focused ? 'hands' : 'hands-outline';
              break;
            case 'المزيد':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.gold,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarStyle: {
          backgroundColor: COLORS.navy,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter',
          fontSize: 12,
        },
        headerStyle: {
          backgroundColor: COLORS.midnight,
        },
        headerTintColor: COLORS.gold,
        headerTitleStyle: {
          fontFamily: 'Inter',
          fontWeight: '600',
        },
      })}>
      <Tab.Screen name="الرئيسية" component={HomeScreen} />
      <Tab.Screen name="القرآن" component={QuranScreen} />
      <Tab.Screen name="الصلاة" component={PrayerScreen} />
      <Tab.Screen name="الأذكار" component={AzkarScreen} />
      <Tab.Screen name="المزيد" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate splash loading
    const timer = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.midnight} />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: COLORS.midnight,
              },
              headerTintColor: COLORS.gold,
              headerTitleStyle: {
                fontFamily: 'Inter',
                fontWeight: '600',
              },
            }}>
            <Stack.Screen
              name="Main"
              component={MainTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="QuranReader"
              component={QuranReaderScreen}
              options={{title: 'القارئ'}}
            />
            <Stack.Screen
              name="Qibla"
              component={QiblaScreen}
              options={{title: 'القبلة'}}
            />
            <Stack.Screen
              name="Hadith"
              component={HadithScreen}
              options={{title: 'الأحاديث'}}
            />
            <Stack.Screen
              name="Radio"
              component={RadioScreen}
              options={{title: 'الراديو'}}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{title: 'الإعدادات'}}
            />
            <Stack.Screen
              name="Salawat"
              component={SalawatScreen}
              options={{title: 'الصلاة على النبي'}}
            />
            <Stack.Screen
              name="Names"
              component={NamesScreen}
              options={{title: 'أسماء الله الحسنى'}}
            />
            <Stack.Screen
              name="TasbeehCounter"
              component={TasbeehCounterScreen}
              options={{title: 'عداد التسبيح'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

// Simple Splash Screen
function SplashScreen() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.midnight} />
    </React.Fragment>
  );
}
