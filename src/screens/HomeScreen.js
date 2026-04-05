import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import moment from 'moment-hijri';

import {COLORS, GRADIENTS} from '../constants/theme';
import {PRAYER_ARABIC, PRAYER_ICONS, PRAYER_COLORS} from '../constants/data';
import {getPrayerTimesByCoords, getHijriDate} from '../api/prayer';
import {usePrayerStore} from '../store/usePrayerStore';
import {useSettingsStore} from '../store/useSettingsStore';

export default function HomeScreen({navigation}) {
  const {prayerTimes, nextPrayer, nextPrayerTime, hijriDate, countdown} =
    usePrayerStore();
  const {location, setPrayerTimes: storePrayerTimes, setHijriDate} =
    useSettingsStore();
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  useEffect(() => {
    if (nextPrayerTime) {
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [nextPrayerTime]);

  const fetchPrayerTimes = async () => {
    try {
      Geolocation.getCurrentPosition(
        async (pos) => {
          const {latitude, longitude} = pos.coords;
          const data = await getPrayerTimesByCoords(latitude, longitude);
          storePrayerTimes(data.timings);
          setHijriDate(data.date.hijri);

          // Find next prayer
          const now = new Date();
          const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
          for (const prayer of prayers) {
            const [h, m] = data.timings[prayer].split(':');
            const prayerTime = new Date();
            prayerTime.setHours(parseInt(h), parseInt(m), 0);
            if (prayerTime > now) {
              usePrayerStore.getState().setNextPrayer(prayer, data.timings[prayer]);
              break;
            }
          }
        },
        (error) => {
          console.error('Location error:', error);
          // Fallback to Cairo
          fetchPrayerTimesByCity('Cairo', 'Egypt');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchPrayerTimesByCity = async (city, country) => {
    try {
      const {getPrayerTimesByCity} = await import('../api/prayer');
      const data = await getPrayerTimesByCity(city, country);
      storePrayerTimes(data.timings);
      setHijriDate(data.date.hijri);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateCountdown = () => {
    if (!nextPrayerTime) return;
    const now = new Date();
    const [h, m] = nextPrayerTime.split(':');
    const target = new Date();
    target.setHours(parseInt(h), parseInt(m), 0);
    const diff = target - now;

    if (diff <= 0) {
      setTimeLeft('00:00:00');
      return;
    }

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    setTimeLeft(
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
    );
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'صباح الخير';
    if (hour < 17) return 'مساء النور';
    return 'مساء الخير';
  };

  const todayHijri = hijriDate
    ? `${hijriDate.day} ${hijriDate.month.ar} ${hijriDate.year} هـ`
    : moment().format('iD iMMMM iYYYY') + ' هـ';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{getGreeting()}</Text>
            <Text style={styles.date}>{todayHijri}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.settingsBtn}>
            <Text style={styles.settingsIcon}>⚙</Text>
          </TouchableOpacity>
        </View>

        {/* Next Prayer Countdown */}
        <View style={styles.countdownCard}>
          <Text style={styles.nextPrayerLabel}>
            {PRAYER_ICONS[nextPrayer] || '🕌'} {PRAYER_ARABIC[nextPrayer] || 'الصلاة القادمة'}
          </Text>
          <Text style={styles.countdownText}>{timeLeft || '--:--:--'}</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Quick Access Grid */}
        <Text style={styles.sectionTitle}>⚡ وصول سريع</Text>
        <View style={styles.grid}>
          <TouchableOpacity
            style={[styles.gridCard, {borderLeftColor: COLORS.gold}]}
            onPress={() => navigation.navigate('القرآن')}>
            <Text style={styles.gridIcon}>📖</Text>
            <Text style={styles.gridText}>القرآن الكريم</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.gridCard, {borderLeftColor: COLORS.green}]}
            onPress={() => navigation.navigate('الأذكار')}>
            <Text style={styles.gridIcon}>📿</Text>
            <Text style={styles.gridText}>الأذكار</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.gridCard, {borderLeftColor: COLORS.teal}]}
            onPress={() => navigation.navigate('Qibla')}>
            <Text style={styles.gridIcon}>🧭</Text>
            <Text style={styles.gridText}>القبلة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.gridCard, {borderLeftColor: COLORS.gold}]}
            onPress={() => navigation.navigate('Salawat')}>
            <Text style={styles.gridIcon}>💚</Text>
            <Text style={styles.gridText}>الصلاة على النبي</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.gridCard, {borderLeftColor: COLORS.green}]}
            onPress={() => navigation.navigate('Radio')}>
            <Text style={styles.gridIcon}>📻</Text>
            <Text style={styles.gridText}>الراديو</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.gridCard, {borderLeftColor: COLORS.teal}]}
            onPress={() => navigation.navigate('Hadith')}>
            <Text style={styles.gridIcon}>📜</Text>
            <Text style={styles.gridText}>حديث اليوم</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Reading */}
        <View style={styles.continueCard}>
          <Text style={styles.continueTitle}>📖 تابع القراءة</Text>
          <Text style={styles.continueText}>سورة الفاتحة — الآية 1</Text>
          <Text style={styles.continueLink}>متابعة ←</Text>
        </View>

        {/* Hadith of the Day */}
        <View style={styles.hadithCard}>
          <Text style={styles.hadithTitle}>💬 حديث اليوم</Text>
          <Text style={styles.hadithText}>
            عن أبي هريرة رضي الله عنه قال: قال رسول الله ﷺ: «من سلك طريقاً يلتمس فيه علماً، سهل الله له به طريقاً إلى الجنة»
          </Text>
          <Text style={styles.hadithSource}>— رواه مسلم</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  date: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  settingsBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    fontSize: 22,
  },
  countdownCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 20,
    borderRadius: 16,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.goldMuted,
    alignItems: 'center',
  },
  nextPrayerLabel: {
    fontSize: 18,
    color: COLORS.gold,
    fontWeight: '600',
  },
  countdownText: {
    fontSize: 42,
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontFamily: 'monospace',
    marginVertical: 8,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: COLORS.surface,
    borderRadius: 3,
    marginTop: 12,
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  gridCard: {
    flex: 1,
    minWidth: '45%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderLeftWidth: 4,
    alignItems: 'center',
  },
  gridIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  gridText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  continueCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  continueTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  continueText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  continueLink: {
    fontSize: 14,
    color: COLORS.gold,
    fontWeight: '600',
    textAlign: 'right',
  },
  hadithCard: {
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  hadithTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.gold,
    marginBottom: 12,
  },
  hadithText: {
    fontSize: 16,
    color: COLORS.textArabic,
    lineHeight: 28,
    textAlign: 'right',
    marginBottom: 12,
  },
  hadithSource: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'right',
  },
});
