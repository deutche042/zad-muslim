import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../constants/theme';
import {getAzkar} from '../api/azkar';

const AZKAR_CATEGORIES = [
  {key: 'أذكار الصباح', icon: '🌅', color: '#F59E0B'},
  {key: 'أذكار المساء', icon: '🌙', color: '#312E81'},
  {key: 'أذكار بعد الصلاة', icon: '🕌', color: '#1A9B5F'},
  {key: 'أذكار النوم', icon: '😴', color: '#7C3AED'},
  {key: 'أذكار الاستيقاظ', icon: '☀️', color: '#D97706'},
  {key: 'أذكار السفر', icon: '✈️', color: '#0EA5E9'},
];

export default function AzkarScreen({navigation}) {
  const [azkarData, setAzkarData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAzkar();
  }, []);

  const fetchAzkar = async () => {
    try {
      const data = await getAzkar();
      setAzkarData(data);
    } catch (error) {
      console.error('Error fetching azkar:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderCategory = ({item}) => (
    <TouchableOpacity
      style={[styles.categoryCard, {borderLeftColor: item.color}]}
      onPress={() =>
        navigation.navigate('TasbeehCounter', {category: item.key})
      }>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.key}</Text>
      <Icon name="chevron-forward" size={20} color={COLORS.textMuted} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📿 الأذكار والتسبيح</Text>
      </View>

      <FlatList
        data={AZKAR_CATEGORIES}
        renderItem={renderCategory}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={styles.tasbeehButton}
            onPress={() => navigation.navigate('TasbeehCounter')}>
            <Text style={styles.tasbeehIcon}>📿</Text>
            <Text style={styles.tasbeehText}>عداد التسبيح</Text>
          </TouchableOpacity>
        )}
      />
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
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderLeftWidth: 4,
  },
  categoryIcon: {
    fontSize: 28,
    marginRight: 16,
  },
  categoryName: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'right',
  },
  tasbeehButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    backgroundColor: COLORS.goldMuted,
    borderWidth: 1,
    borderColor: COLORS.gold,
    gap: 12,
  },
  tasbeehIcon: {
    fontSize: 32,
  },
  tasbeehText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.gold,
  },
});
