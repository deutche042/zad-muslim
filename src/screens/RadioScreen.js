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
import TrackPlayer, {State, Capability} from 'react-native-track-player';

import {COLORS} from '../constants/theme';
import {getRadioStations} from '../api/azkar';

export default function RadioScreen() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState(null);

  useEffect(() => {
    fetchStations();
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      });
    } catch (error) {
      console.error('Error setting up player:', error);
    }
  };

  const fetchStations = async () => {
    try {
      const data = await getRadioStations();
      if (data && data.length > 0) {
        setStations(data);
      } else {
        // Fallback mock data
        setStations([
          {name: 'إذاعة القرآن الكريم - مكة', url: 'https://live.hibst.com/8026', image: '🕌'},
          {name: 'إذاعة القرآن - المدينة', url: 'https://live.hibst.com/8024', image: '🕌'},
          {name: 'إذاعة القرآن الكريم', url: 'https://qurango.net/radio/mishary_alafasy', image: '📻'},
        ]);
      }
    } catch (error) {
      console.error('Error fetching stations:', error);
      // Fallback mock data
      setStations([
        {name: 'إذاعة القرآن الكريم', url: 'https://qurango.net/radio/mishary_alafasy', image: '📻'},
      ]);
    } finally {
      setLoading(false);
    }
  };

  const playStation = async (station) => {
    try {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: station.url,
        url: station.url,
        title: station.name,
        artist: 'Quran Radio',
      });
      await TrackPlayer.play();
      setIsPlaying(true);
      setCurrentStation(station);
    } catch (error) {
      console.error('Error playing station:', error);
    }
  };

  const stopPlayer = async () => {
    try {
      await TrackPlayer.stop();
      setIsPlaying(false);
    } catch (error) {
      console.error('Error stopping player:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📻 الراديو الإسلامي</Text>
      </View>

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.gold} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          {currentStation && (
            <View style={styles.nowPlaying}>
              <Text style={styles.nowPlayingIcon}>🔊</Text>
              <Text style={styles.nowPlayingText}>{currentStation.name}</Text>
              <TouchableOpacity style={styles.stopBtn} onPress={stopPlayer}>
                <Text style={styles.stopText}>إيقاف</Text>
              </TouchableOpacity>
            </View>
          )}

          {stations.map((station, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.stationCard,
                currentStation?.url === station.url && styles.activeStation,
              ]}
              onPress={() => playStation(station)}>
              <Text style={styles.stationIcon}>{station.image || '📻'}</Text>
              <Text style={styles.stationName}>{station.name}</Text>
              <Text style={styles.playIcon}>▶</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  nowPlaying: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: COLORS.green + '20',
    borderWidth: 1,
    borderColor: COLORS.green,
    gap: 12,
  },
  nowPlayingIcon: {
    fontSize: 24,
  },
  nowPlayingText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.green,
    textAlign: 'right',
  },
  stopBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: COLORS.green,
  },
  stopText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white,
  },
  stationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  activeStation: {
    borderColor: COLORS.gold,
    backgroundColor: COLORS.goldMuted,
  },
  stationIcon: {
    fontSize: 28,
    marginRight: 16,
  },
  stationName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'right',
  },
  playIcon: {
    fontSize: 20,
    color: COLORS.gold,
  },
});
