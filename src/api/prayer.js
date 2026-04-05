import axios from 'axios';

// ===== PRAYER TIMES API (aladhan.com) =====
const ALADHAN_BASE = 'https://api.aladhan.com/v1';

export const getPrayerTimesByCoords = async (latitude, longitude, method = 4, school = 0) => {
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const response = await axios.get(
      `${ALADHAN_BASE}/timings/${timestamp}`,
      {
        params: {
          latitude,
          longitude,
          method,
          school,
        },
      },
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    throw error;
  }
};

export const getPrayerTimesByCity = async (city, country, method = 4, school = 0) => {
  try {
    const response = await axios.get(
      `${ALADHAN_BASE}/timingsByCity`,
      {
        params: {
          city,
          country,
          method,
          school,
        },
      },
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching prayer times by city:', error);
    throw error;
  }
};

export const getMonthlyPrayerTimes = async (year, month, latitude, longitude, method = 4) => {
  try {
    const response = await axios.get(
      `${ALADHAN_BASE}/calendar/${year}/${month}`,
      {
        params: {
          latitude,
          longitude,
          method,
        },
      },
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching monthly prayer times:', error);
    throw error;
  }
};

export const getQiblaDirection = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${ALADHAN_BASE}/qibla/${latitude}/${longitude}`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Qibla direction:', error);
    throw error;
  }
};

export const getHijriDate = async (day, month, year) => {
  try {
    const response = await axios.get(
      `${ALADHAN_BASE}/gToH/${day}-${month}-${year}`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Hijri date:', error);
    throw error;
  }
};

export const get99Names = async () => {
  try {
    const response = await axios.get(`${ALADHAN_BASE}/asmaAlHusna`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching 99 names:', error);
    throw error;
  }
};
