import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import {COLORS} from '../constants/theme';
import {get99Names} from '../api/prayer';

export default function NamesScreen() {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    try {
      const data = await get99Names();
      setNames(data);
    } catch (error) {
      console.error('Error fetching names:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderName = ({item}) => (
    <View style={styles.nameCard}>
      <View style={styles.numberBadge}>
        <Text style={styles.numberText}>{item.transliteration?.en || item.number}</Text>
      </View>
      <View style={styles.nameInfo}>
        <Text style={styles.arabicName}>{item.name?.short || item.name || '—'}</Text>
        <Text style={styles.englishName}>{item.transliteration?.en || ''}</Text>
        <Text style={styles.meaning}>{item.en?.meaning || item.translation || ''}</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={COLORS.gold} />
        <Text style={styles.loadingText}>جاري التحميل...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>✨ أسماء الله الحسنى</Text>
        <Text style={styles.subHeader}>وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا</Text>
      </View>

      <FlatList
        data={names}
        renderItem={renderName}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
  subHeader: {
    fontSize: 16,
    color: COLORS.gold,
    textAlign: 'center',
    marginTop: 8,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.midnight,
  },
  loadingText: {
    color: COLORS.textSecondary,
    marginTop: 12,
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  nameCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  numberBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.goldMuted,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  numberText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.gold,
  },
  nameInfo: {
    flex: 1,
  },
  arabicName: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textArabic,
    textAlign: 'right',
    marginBottom: 4,
  },
  englishName: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  meaning: {
    fontSize: 13,
    color: COLORS.textMuted,
    fontStyle: 'italic',
  },
});
