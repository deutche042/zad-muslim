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

import {COLORS} from '../constants/theme';
import {getRandomHadith} from '../api/azkar';

export default function HadithScreen() {
  const [hadith, setHadith] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHadith();
  }, []);

  const fetchHadith = async () => {
    try {
      const data = await getRandomHadith();
      setHadith(data);
    } catch (error) {
      console.error('Error fetching hadith:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📜 حديث اليوم</Text>
      </View>

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.gold} />
        </View>
      ) : hadith ? (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.hadithCard}>
            <Text style={styles.hadithArabic}>{hadith.arab}</Text>
            <View style={styles.divider} />
            <Text style={styles.hadithTranslation}>{hadith.id}</Text>
            <View style={styles.sourceContainer}>
              <Text style={styles.sourceLabel}>المصدر:</Text>
              <Text style={styles.sourceValue}>{hadith.source}</Text>
            </View>
            {hadith.grade && (
              <View style={styles.gradeContainer}>
                <Text style={styles.gradeLabel}>الحكم:</Text>
                <Text style={styles.gradeValue}>{hadith.grade}</Text>
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.refreshBtn} onPress={fetchHadith}>
            <Text style={styles.refreshText}>حديث آخر 🔄</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <Text style={styles.errorText}>لم يتم العثور على حديث</Text>
      )}
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  hadithCard: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  hadithArabic: {
    fontSize: 22,
    lineHeight: 38,
    color: COLORS.textArabic,
    textAlign: 'right',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 16,
  },
  hadithTranslation: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textPrimary,
    marginBottom: 16,
  },
  sourceContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  sourceLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  sourceValue: {
    fontSize: 14,
    color: COLORS.gold,
    fontWeight: '600',
  },
  gradeContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  gradeLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  gradeValue: {
    fontSize: 14,
    color: COLORS.green,
    fontWeight: '600',
  },
  refreshBtn: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.goldMuted,
    borderWidth: 1,
    borderColor: COLORS.gold,
    alignItems: 'center',
  },
  refreshText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.gold,
  },
  errorText: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.textSecondary,
    marginTop: 100,
  },
});
