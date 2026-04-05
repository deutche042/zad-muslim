import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';

import {COLORS} from '../constants/theme';
import {useSettingsStore} from '../store/useSettingsStore';
import {CALCULATION_METHODS, MADHHABS, RECITERS} from '../constants/data';

export default function SettingsScreen() {
  const {
    language,
    theme,
    reciter,
    translation,
    fontSize,
    showTranslation,
    prayerMethod,
    madhab,
    notifications,
    setLanguage,
    setTheme,
    setReciter,
    setShowTranslation,
    setPrayerMethod,
    setMadhab,
    updateNotification,
  } = useSettingsStore();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Language & Theme */}
        <Text style={styles.sectionTitle}>🎨 اللغة والمظهر</Text>
        <View style={styles.section}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>اللغة</Text>
            <TouchableOpacity
              style={styles.picker}
              onPress={() => setLanguage(language === 'ar' ? 'en' : 'ar')}>
              <Text style={styles.pickerText}>
                {language === 'ar' ? 'العربية' : 'English'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>المظهر</Text>
            <TouchableOpacity
              style={styles.picker}
              onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <Text style={styles.pickerText}>
                {theme === 'dark' ? 'داكن' : 'فاتح'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quran Settings */}
        <Text style={styles.sectionTitle}>📖 إعدادات القرآن</Text>
        <View style={styles.section}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>القارئ</Text>
            <TouchableOpacity style={styles.picker} onPress={() => {}}>
              <Text style={styles.pickerText}>
                {RECITERS.find((r) => r.id === reciter)?.name || reciter}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>حجم الخط</Text>
            <Text style={styles.valueText}>{fontSize}</Text>
          </View>
          <View style={styles.switchRow}>
            <Text style={styles.settingLabel}>إظهار الترجمة</Text>
            <Switch
              value={showTranslation}
              onValueChange={setShowTranslation}
              trackColor={{false: COLORS.border, true: COLORS.goldMuted}}
              thumbColor={showTranslation ? COLORS.gold : COLORS.textMuted}
            />
          </View>
        </View>

        {/* Prayer Settings */}
        <Text style={styles.sectionTitle}>🕌 إعدادات الصلاة</Text>
        <View style={styles.section}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>طريقة الحساب</Text>
            <TouchableOpacity style={styles.picker} onPress={() => {}}>
              <Text style={styles.pickerText}>
                {CALCULATION_METHODS.find((m) => m.id === prayerMethod)?.name || '—'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>المذهب</Text>
            <TouchableOpacity style={styles.picker} onPress={() => {}}>
              <Text style={styles.pickerText}>
                {MADHHABS.find((m) => m.id === madhab)?.name || '—'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Notifications */}
        <Text style={styles.sectionTitle}>🔔 الإشعارات</Text>
        <View style={styles.section}>
          <View style={styles.switchRow}>
            <Text style={styles.settingLabel}>إشعارات الصلاة</Text>
            <Switch
              value={notifications.prayer}
              onValueChange={(val) => updateNotification('prayer', val)}
              trackColor={{false: COLORS.border, true: COLORS.goldMuted}}
              thumbColor={notifications.prayer ? COLORS.gold : COLORS.textMuted}
            />
          </View>
          <View style={styles.switchRow}>
            <Text style={styles.settingLabel}>أذكار الصباح</Text>
            <Switch
              value={notifications.morningAzkar}
              onValueChange={(val) => updateNotification('morningAzkar', val)}
              trackColor={{false: COLORS.border, true: COLORS.goldMuted}}
              thumbColor={notifications.morningAzkar ? COLORS.gold : COLORS.textMuted}
            />
          </View>
          <View style={styles.switchRow}>
            <Text style={styles.settingLabel}>أذكار المساء</Text>
            <Switch
              value={notifications.eveningAzkar}
              onValueChange={(val) => updateNotification('eveningAzkar', val)}
              trackColor={{false: COLORS.border, true: COLORS.goldMuted}}
              thumbColor={notifications.eveningAzkar ? COLORS.gold : COLORS.textMuted}
            />
          </View>
          <View style={styles.switchRow}>
            <Text style={styles.settingLabel}>الصلاة على النبي</Text>
            <Switch
              value={notifications.salawat}
              onValueChange={(val) => updateNotification('salawat', val)}
              trackColor={{false: COLORS.border, true: COLORS.goldMuted}}
              thumbColor={notifications.salawat ? COLORS.gold : COLORS.textMuted}
            />
          </View>
        </View>

        {/* About */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>زاد مسلم — Zad Muslim</Text>
          <Text style={styles.aboutVersion}>الإصدار 1.0.0</Text>
          <Text style={styles.aboutText}>
            تطبيقك الإسلامي الشامل — بإذن الله، لتكون عوناً لكل مسلم في حياته اليومية
          </Text>
          <Text style={styles.aboutDua}>🤲 اللهم تقبل واجعله في ميزان حسناتنا</Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
  },
  section: {
    marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  settingLabel: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  picker: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: COLORS.surface,
  },
  pickerText: {
    fontSize: 14,
    color: COLORS.gold,
  },
  valueText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  aboutSection: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 60,
    padding: 24,
    borderRadius: 16,
    backgroundColor: COLORS.navy,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.gold,
    marginBottom: 8,
  },
  aboutVersion: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  aboutDua: {
    fontSize: 16,
    color: COLORS.gold,
    fontWeight: '600',
    textAlign: 'center',
  },
});
