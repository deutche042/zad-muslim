import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Vibration,
} from 'react-native';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';

import {COLORS} from '../constants/theme';

export default function TasbeehCounterScreen({route, navigation}) {
  const {category} = route.params || {};
  const [count, setCount] = React.useState(0);
  const [target, setTarget] = React.useState(33);
  const [rounds, setRounds] = React.useState(0);
  const [dhikr, setDhikr] = React.useState('سبحان الله');

  const tap = () => {
    if (count + 1 >= target) {
      setRounds((r) => r + 1);
      setCount(0);
      Vibration.vibrate(200);
    } else {
      setCount((c) => c + 1);
      Vibration.vibrate(30);
    }
  };

  const progress = (count / target) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📿 عداد التسبيح</Text>
        {category && <Text style={styles.category}>{category}</Text>}
      </View>

      <View style={styles.content}>
        {/* Dhikr Text */}
        <TouchableOpacity
          style={styles.dhikrContainer}
          onPress={() => {
            // Cycle through common adhkar
            const adhkar = ['سبحان الله', 'الحمد لله', 'الله أكبر', 'لا إله إلا الله'];
            const currentIndex = adhkar.indexOf(dhikr);
            setDhikr(adhkar[(currentIndex + 1) % adhkar.length]);
          }}>
          <Text style={styles.dhikrText}>{dhikr}</Text>
          <Text style={styles.tapHint}>اضغط لتغيير الذكر</Text>
        </TouchableOpacity>

        {/* Circular Progress */}
        <CircularProgressBase
          value={progress}
          radius={100}
          duration={200}
          progressValueColor={COLORS.gold}
          maxValueColor={COLORS.border}
          progressColor={COLORS.gold}
          activeStrokeWidth={14}
          inActiveStrokeWidth={8}
          inActiveStrokeOpacity={0.2}>
          <View>
            <Text style={styles.countText}>{count}</Text>
            <Text style={styles.targetText}>/ {target}</Text>
          </View>
        </CircularProgressBase>

        {/* Tap Button */}
        <TouchableOpacity
          style={styles.tapBtn}
          onPress={tap}
          activeOpacity={0.8}>
          <Text style={styles.tapText}>اضغط للتسبيح</Text>
        </TouchableOpacity>

        {/* Rounds */}
        <View style={styles.roundsContainer}>
          <Text style={styles.roundsText}>الدورات: {rounds} × {target}</Text>
        </View>

        {/* Target Selection */}
        <View style={styles.targetRow}>
          {[33, 99, 100].map((t) => (
            <TouchableOpacity
              key={t}
              style={[
                styles.targetBtn,
                target === t && styles.targetBtnActive,
              ]}
              onPress={() => setTarget(t)}>
              <Text
                style={[
                  styles.targetBtnText,
                  target === t && styles.targetBtnTextActive,
                ]}>
                {t}
              </Text>
            </TouchableOpacity>
          ))}
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
  category: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  dhikrContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  dhikrText: {
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.gold,
    textAlign: 'center',
    marginBottom: 8,
  },
  tapHint: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  countText: {
    fontSize: 48,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  targetText: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  tapBtn: {
    marginTop: 40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.gold,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  tapText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.midnight,
    textAlign: 'center',
  },
  roundsContainer: {
    marginTop: 30,
    padding: 12,
    borderRadius: 8,
    backgroundColor: COLORS.navy,
  },
  roundsText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  targetRow: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 12,
  },
  targetBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  targetBtnActive: {
    backgroundColor: COLORS.gold,
    borderColor: COLORS.gold,
  },
  targetBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  targetBtnTextActive: {
    color: COLORS.midnight,
  },
});
