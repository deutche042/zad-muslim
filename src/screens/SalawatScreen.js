import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Vibration,
} from 'react-native';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';

import {COLORS} from '../constants/theme';

export default function SalawatScreen() {
  const [count, setCount] = useState(0);
  const [daily, setDaily] = useState(0);
  const target = 100;

  const tap = () => {
    setCount((c) => c + 1);
    setDaily((d) => d + 1);
    Vibration.vibrate(20);
  };

  const progress = Math.min((daily % target) / target, 1) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>💚 الصلاة على النبي ﷺ</Text>
      </View>

      <View style={styles.content}>
        {/* Arabic Calligraphy */}
        <Text style={styles.calligraphy}>ﷺ</Text>

        {/* Main Dhikr */}
        <Text style={styles.dhikrText}>اللهم صلِّ على محمد</Text>

        {/* Circular Progress */}
        <CircularProgressBase
          value={progress}
          radius={80}
          duration={300}
          progressValueColor={COLORS.gold}
          maxValueColor={COLORS.border}
          progressColor={COLORS.green}
          activeStrokeWidth={10}
          inActiveStrokeWidth={6}
          inActiveStrokeOpacity={0.3}>
          <Text style={styles.countText}>{daily % target}</Text>
        </CircularProgressBase>

        {/* Tap Button */}
        <TouchableOpacity style={styles.tapBtn} onPress={tap}>
          <Text style={styles.tapText}>صلِّ على النبي ﷺ</Text>
        </TouchableOpacity>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>اليوم</Text>
            <Text style={styles.statValue}>{daily}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>الإجمالي</Text>
            <Text style={styles.statValue}>{count.toLocaleString('ar-SA')}</Text>
          </View>
        </View>
      </View>
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
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  calligraphy: {
    fontSize: 80,
    color: COLORS.gold,
    marginBottom: 16,
  },
  dhikrText: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.gold,
    textAlign: 'center',
    marginBottom: 40,
  },
  countText: {
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  tapBtn: {
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: COLORS.green,
    borderWidth: 2,
    borderColor: COLORS.greenGlow,
  },
  tapText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.white,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 40,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.gold,
  },
});
