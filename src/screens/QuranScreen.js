import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../constants/theme';
import {SURAH_LIST} from '../constants/data';
import {getSurahList} from '../api/quran';

export default function QuranScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [surahs, setSurahs] = useState(SURAH_LIST);

  useEffect(() => {
    fetchSurahs();
  }, []);

  const fetchSurahs = async () => {
    try {
      setLoading(true);
      const data = await getSurahList();
      if (data && data.length > 0) {
        setSurahs(data);
      }
    } catch (error) {
      console.error('Error fetching surahs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSurahs = surahs.filter(
    (s) =>
      s.name.includes(search) ||
      (s.englishName && s.englishName.toLowerCase().includes(search.toLowerCase())) ||
      String(s.number).includes(search),
  );

  const renderSurah = ({item, index}) => (
    <TouchableOpacity
      style={styles.surahCard}
      onPress={() =>
        navigation.navigate('QuranReader', {
          surahNumber: item.number,
          surahName: item.name,
        })
      }>
      <View style={styles.surahNumber}>
        <View style={styles.numberCircle}>
          <Text style={styles.numberText}>{item.number}</Text>
        </View>
      </View>
      <View style={styles.surahInfo}>
        <Text style={styles.surahName}>{item.name}</Text>
        <Text style={styles.surahEnglish}>{item.englishName}</Text>
      </View>
      <View style={styles.surahMeta}>
        <Text style={styles.versesCount}>{item.versesCount || item.numberOfAyahs || '—'} آية</Text>
        <Text style={styles.surahType}>{item.type || '—'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color={COLORS.textMuted} />
        <TextInput
          style={styles.searchInput}
          placeholder="ابحث عن سورة..."
          placeholderTextColor={COLORS.textMuted}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Surah List */}
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.gold} />
          <Text style={styles.loaderText}>جاري التحميل...</Text>
        </View>
      ) : (
        <FlatList
          data={filteredSurahs}
          renderItem={renderSurah}
          keyExtractor={(item) => String(item.number)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.midnight,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    marginLeft: 12,
    textAlign: 'right',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    color: COLORS.textSecondary,
    marginTop: 12,
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  surahCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  surahNumber: {
    marginRight: 12,
  },
  numberCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.goldMuted,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.gold,
  },
  surahInfo: {
    flex: 1,
  },
  surahName: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textArabic,
    textAlign: 'right',
    marginBottom: 4,
  },
  surahEnglish: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  surahMeta: {
    alignItems: 'flex-end',
  },
  versesCount: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  surahType: {
    fontSize: 11,
    color: COLORS.gold,
    fontWeight: '600',
  },
});
