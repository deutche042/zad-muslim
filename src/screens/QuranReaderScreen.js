import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

import {COLORS} from '../constants/theme';
import {getSurahFull} from '../api/quran';

export default function QuranReaderScreen({route}) {
  const {surahNumber, surahName} = route.params;
  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSurah();
  }, [surahNumber]);

  const fetchSurah = async () => {
    try {
      setLoading(true);
      const data = await getSurahFull(surahNumber);
      setSurahData(data);
    } catch (error) {
      console.error('Error fetching surah:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={COLORS.gold} />
        <Text style={styles.loaderText}>جاري تحميل السورة...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Surah Header */}
      <View style={styles.surahHeader}>
        <Text style={styles.bismillah}>
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </Text>
        <Text style={styles.surahName}>{surahName}</Text>
      </View>

      {/* Ayahs */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ayahsContainer}>
          {surahData?.ayahs?.map((ayah, index) => (
            <View key={ayah.numberInSurah} style={styles.ayahBlock}>
              <Text style={styles.arabicText} selectable>
                {ayah.text}{' '}
                <Text style={styles.ayahNumber}>
                  ﴿{ayah.numberInSurah}﴾
                </Text>
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.midnight,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.midnight,
  },
  loaderText: {
    color: COLORS.textSecondary,
    marginTop: 12,
    fontSize: 14,
  },
  surahHeader: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  bismillah: {
    fontSize: 24,
    color: COLORS.gold,
    textAlign: 'center',
    marginBottom: 12,
  },
  surahName: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textArabic,
    textAlign: 'center',
  },
  ayahsContainer: {
    padding: 20,
  },
  ayahBlock: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  arabicText: {
    fontSize: 24,
    lineHeight: 42,
    color: COLORS.textArabic,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  ayahNumber: {
    fontSize: 18,
    color: COLORS.gold,
    fontWeight: '700',
  },
});
