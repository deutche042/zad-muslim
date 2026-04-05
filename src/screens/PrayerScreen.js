import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {COLORS} from '../constants/theme';
import {PRAYER_ARABIC, PRAYER_ICONS, PRAYER_COLORS} from '../constants/data';

export default function PrayerScreen() {
  // Mock data - will be replaced with real API data
  const prayers = [
    {name: 'Fajr', time: '04:32'},
    {name: 'Sunrise', time: '06:05'},
    {name: 'Dhuhr', time: '11:58'},
    {name: 'Asr', time: '15:22'},
    {name: 'Maghrib', time: '18:01'},
    {name: 'Isha', time: '19:31'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Today's Date */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🕌 مواقيت الصلاة</Text>
          <Text style={styles.subHeader}>اليوم — الثلاثاء ١ رمضان ١٤٤٧ هـ</Text>
        </View>

        {/* Prayer Cards */}
        <View style={styles.cardsContainer}>
          {prayers.map((prayer) => (
            <View
              key={prayer.name}
              style={[
                styles.prayerCard,
                {borderLeftColor: PRAYER_COLORS[prayer.name] || COLORS.gold},
              ]}>
              <View style={styles.prayerInfo}>
                <Text style={styles.prayerIcon}>{PRAYER_ICONS[prayer.name]}</Text>
                <Text style={styles.prayerName}>
                  {PRAYER_ARABIC[prayer.name]}
                </Text>
              </View>
              <Text style={styles.prayerTime}>{prayer.time}</Text>
            </View>
          ))}
        </View>

        {/* Next Prayer Highlight */}
        <View style={styles.nextPrayerCard}>
          <Text style={styles.nextPrayerLabel}>⏰ الصلاة القادمة</Text>
          <Text style={styles.nextPrayerName}>العصر</Text>
          <Text style={styles.nextPrayerCountdown}>متبقي: 03:24:15</Text>
        </View>

        {/* Monthly Timetable Button */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>📅 عرض الجدول الشهري</Text>
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
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  prayerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderLeftWidth: 4,
  },
  prayerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  prayerIcon: {
    fontSize: 24,
  },
  prayerName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  prayerTime: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.gold,
    fontFamily: 'monospace',
  },
  nextPrayerCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 20,
    borderRadius: 16,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.goldMuted,
    alignItems: 'center',
  },
  nextPrayerLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  nextPrayerName: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.gold,
    marginBottom: 12,
  },
  nextPrayerCountdown: {
    fontSize: 32,
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontFamily: 'monospace',
  },
  footer: {
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: COLORS.gold,
    fontWeight: '600',
  },
});
