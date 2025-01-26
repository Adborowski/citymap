export const ansiColors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  reset: "\x1b[0m",
  brightBlack: "\x1b[90m",
  brightRed: "\x1b[91m",
  brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",
};

export const fluctuate = (number, amplitude) => {
  let newNumber = number;
  const negativity = Math.random() > 0.5 ? 1 : -1;
  const modifier = Math.random() * amplitude * negativity;
  newNumber += modifier;

  return newNumber;
};

export const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const kmToLat = (km) => {
  // Length in km of 1° of latitude = always 111.32 km
  return km / 111.32;
};

export const latToKm = (lat) => {
  // Length in km of 1° of latitude = always 111.32 km
  return lat * 111.32;
};

export const kmToLng = (km, latitude) => {
  // Earth's circumference at the equator (in km)
  const earthCircumference = 40075;
  // Convert latitude to radians
  const latInRadians = latitude * (Math.PI / 180);
  // Calculate the length of 1 degree of longitude at given latitude
  const kmPerDegree = (earthCircumference * Math.cos(latInRadians)) / 360;
  // Convert km to longitude degrees
  return km / kmPerDegree;
};

export const lngToKm = (lng, latitude) => {
  // Earth's circumference at the equator (in km)
  const earthCircumference = 40075;
  // Convert latitude to radians
  const latInRadians = latitude * (Math.PI / 180);
  // Calculate the length of 1 degree of longitude at given latitude
  const kmPerDegree = (earthCircumference * Math.cos(latInRadians)) / 360;
  // Convert longitude degrees to km
  return lng * kmPerDegree;
};

export const getDummyMarkers = () => {
  const ac = ansiColors;
  const coordWarsaw = { latitude: 52.2297, longitude: 21.0122 };
  const markerCount = 5;
  const markerSpread = 0.008;
  const dummyMarkers = [];
  const dummyDescription =
    "A static asset is a file that is bundled with your app's binary (native binary). This file type is not part of your app's JavaScript bundle which contain your app's code.";

  const primeDummy = {
    title: `marker-prime`,
    description: dummyDescription,
    coordinate: coordWarsaw,
    pinColor: "#ff0000",
  };

  dummyMarkers.push(primeDummy);

  for (let i = 0; i < markerCount; i++) {
    const latitude = fluctuate(coordWarsaw.latitude, markerSpread);
    const longitude = fluctuate(coordWarsaw.longitude, markerSpread);

    dummyMarkers.push({
      title: `marker-${i}`,
      coordinate: { latitude: latitude, longitude: longitude },
      description: dummyDescription,
    });
  }

  console.log(`${ac.yellow}${dummyMarkers.length} dummy markers ${ac.reset}`);
  return dummyMarkers;
};
