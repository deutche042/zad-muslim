import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../constants/theme';

const MORE_ITEMS = [
  {name: 'القبلة', icon: 'compass-outline', screen: 'Qibla', color: COLORS.gold},
  {name: 'أسماء الله الحسنى', icon: 'star-outline', screen: 'Names', color: COLORS.green},
  {name: 'حديث اليوم', icon: 'library-outline', screen: 'Hadith', color: COLORS.teal},
  {name: 'الراديو الإسلامي', icon: 'radio-outline', screen: 'Radio', color: COLORS.gold},
  {name: 'الصلاة على النبي', icon: 'heart-outline', screen: 'Salawat', color: COLORS.green},
  {name: 'الإعدادات', icon: 'settings-outline', screen: 'Settings', color: COLORS.teal},
];

export default function MoreScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>☰ المزيد</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {MORE_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.itemCard}
            onPress={() => navigation.navigate(item.screen)}>
            <View style={[styles.iconContainer, {backgroundColor: item.color + '20'}]}>
              <Icon name={item.icon} size={28} color={item.color} />
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Icon name="chevron-forward" size={20} color={COLORS.textMuted} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.midnight,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemName: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'right',
  },
});
