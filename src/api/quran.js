import axios from 'axios';

const QURAN_BASE = 'https://api.alquran.cloud/v1';
const QURAN_COM_BASE = 'https://api.quran.com/api/v4';

// Get all 114 surahs info
export const getSurahList = async () => {
  try {
    const response = await axios.get(`${QURAN_BASE}/surah`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching surah list:', error);
    throw error;
  }
};

// Get full surah with Uthmani text
export const getSurahFull = async (surahNumber) => {
  try {
    const response = await axios.get(`${QURAN_BASE}/surah/${surahNumber}/quran-uthmani`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching surah:', error);
    throw error;
  }
};

// Get surah with translation
export const getSurahWithTranslation = async (surahNumber, edition = 'en.asad') => {
  try {
    const response = await axios.get(
      `${QURAN_BASE}/surah/${surahNumber}/editions/quran-uthmani,${edition}`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching surah with translation:', error);
    throw error;
  }
};

// Get ayah audio URL
export const getAyahAudioUrl = (ayahGlobalNumber, reciter = 'ar.alafasy') => {
  return `https://cdn.islamic.network/quran/audio/128/${reciter}/${ayahGlobalNumber}.mp3`;
};

// Get chapter recitations from quran.com
export const getChapterRecitations = async (chapterNumber, reciterId = 7) => {
  try {
    const response = await axios.get(
      `${QURAN_COM_BASE}/chapter_recitations/${reciterId}/${chapterNumber}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching chapter recitations:', error);
    throw error;
  }
};

// Search Quran
export const searchQuran = async (query, language = 'ar') => {
  try {
    const response = await axios.get(
      `${QURAN_BASE}/search/${encodeURIComponent(query)}/${language}/quran-uthmani`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error searching Quran:', error);
    throw error;
  }
};

// Get juz list
export const getJuzList = async () => {
  try {
    const response = await axios.get(`${QURAN_BASE}/juz`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching juz list:', error);
    throw error;
  }
};

// Get specific juz
export const getJuz = async (juzNumber, edition = 'quran-uthmani') => {
  try {
    const response = await axios.get(`${QURAN_BASE}/juz/${juzNumber}/${edition}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching juz:', error);
    throw error;
  }
};
