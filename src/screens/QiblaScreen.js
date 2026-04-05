import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  SafeAreaView,
} from 'react-native';
import {getQiblaDirection} from '../api/prayer';
import {COLORS} from '../constants/theme';

const {width} = Dimensions.get('window');

export default function QiblaScreen() {
  const [qiblaDirection, setQiblaDirection] = useState(null);
  const [loading, setLoading] = useState(true);
  const needleAnim = new Animated.Value(0);

  useEffect(() => {
    fetchQibla();
  }, []);

  const fetchQibla = async () => {
    try {
      // Mock Cairo coordinates - replace with GPS
      const data = await getQiblaDirection(30.0444, 31.2357);
      setQiblaDirection(data.direction);
      setLoading(false);

      // Animate needle
      Animated.spring(needleAnim, {
        toValue: data.direction,
        useNativeDriver: true,
        tension: 20,
        friction: 5,
      }).start();
    } catch (error) {
      console.error('Error fetching Qibla:', error);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🧭 اتجاه القبلة</Text>
      </View>

      {loading ? (
        <Text style={styles.loading}>جاري الحساب...</Text>
      ) : (
        <View style={styles.compassContainer}>
          {/* Compass Circle */}
          <View style={styles.compassCircle}>
            {/* N, S, E, W Labels */}
            <Text style={[styles.directionLabel, styles.north]}>N</Text>
            <Text style={[styles.directionLabel, styles.south]}>S</Text>
            <Text style={[styles.directionLabel, styles.east]}>E</Text>
            <Text style={[styles.directionLabel, styles.west]}>W</Text>

            {/* Qibla Needle */}
            <Animated.View
              style={[
                styles.needle,
                {
                  transform: [
                    {rotate: `${qiblaDirection}deg`},
                  ],
                },
              ]}>
              <Text style={styles.kaabaIcon}>🕋</Text>
            </Animated.View>

            {/* Center dot */}
            <View style={styles.centerDot} />
          </View>

          {/* Direction Display */}
          <View style={styles.directionDisplay}>
            <Text style={styles.directionValue}>
              {Math.round(qiblaDirection)}°
            </Text>
            <Text style={styles.directionLabel2}>من الشمال</Text>
          </View>

          {/* Distance Info */}
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>المسافة إلى مكة</Text>
            <Text style={styles.infoValue}>~1,200 كم</Text>
          </View>
        </View>
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
  loading: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.textSecondary,
    marginTop: 100,
    fontSize: 16,
  },
  compassContainer: {
    alignItems: 'center',
    paddingTop: 40,
  },
  compassCircle: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: (width * 0.7) / 2,
    backgroundColor: COLORS.navy,
    borderWidth: 4,
    borderColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  directionLabel: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  north: {top: 10},
  south: {bottom: 10},
  east: {right: 10},
  west: {left: 10},
  needle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kaabaIcon: {
    fontSize: 40,
  },
  centerDot: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.gold,
  },
  directionDisplay: {
    marginTop: 30,
    alignItems: 'center',
  },
  directionValue: {
    fontSize: 48,
    fontWeight: '700',
    color: COLORS.gold,
  },
  directionLabel2: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  infoCard: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.gold,
  },
});
