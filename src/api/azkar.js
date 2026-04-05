import axios from 'axios';

// ===== AZKAR API =====
const AZKAR_URL = 'https://raw.githubusercontent.com/nawafalqari/azkar-api/main/azkar.json';

export const getAzkar = async () => {
  try {
    const response = await axios.get(AZKAR_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching azkar:', error);
    throw error;
  }
};

// ===== QURAN RADIO API =====
const RADIO_URL = 'https://data-rosy.vercel.app/radio.json';

export const getRadioStations = async () => {
  try {
    const response = await axios.get(RADIO_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching radio stations:', error);
    throw error;
  }
};

// ===== HADITH API =====
const HADITH_BASE = 'https://hadis-api-id.vercel.app/hadith';

export const getHadithCollection = async (collection, page = 1, limit = 20) => {
  try {
    const response = await axios.get(
      `${HADITH_BASE}/${collection}`,
      {params: {page, limit}},
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error);
    throw error;
  }
};

export const getSpecificHadith = async (collection, hadithNumber) => {
  try {
    const response = await axios.get(
      `${HADITH_BASE}/${collection}/${hadithNumber}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching specific hadith:', error);
    throw error;
  }
};

export const getRandomHadith = async (collection = 'bukhari') => {
  try {
    const response = await axios.get(`${HADITH_BASE}/${collection}`);
    const items = response.data.items;
    if (items && items.length > 0) {
      const randomIndex = Math.floor(Math.random() * items.length);
      return items[randomIndex];
    }
    return null;
  } catch (error) {
    console.error('Error fetching random hadith:', error);
    throw error;
  }
};

// ===== TAFSIR API =====
const TAFSIR_BASE = 'https://quranenc.com/api/v1/translation/aya';

export const getTafsirForAyah = async (surahNumber, ayahNumber, language = 'arabic') => {
  try {
    const response = await axios.get(
      `${TAFSIR_BASE}/${language}/${surahNumber}/${ayahNumber}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching tafsir:', error);
    throw error;
  }
};
