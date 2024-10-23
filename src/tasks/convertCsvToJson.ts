import fs from 'fs';

export const convertCsvToJson = async (csvFilePath: string, jsonFilePath: string) => {
  const DATA_CSV = fs.readFileSync(csvFilePath, 'utf8');
  const LINES = DATA_CSV.split('\n').filter(line => line.trim() !== '');
  const HEADERS = LINES[0].split(',');

  const DATA_JSON = LINES.slice(1).map((line) => {
    const DATA = line.split(',');
    const OBJ = {};

    HEADERS.forEach((header, index) => {
      const value = DATA[index]?.trim();

      if (value) {
        OBJ[header.trim()] = value;
      }
    });

    if (Object.keys(OBJ).length !== 0 || Object.keys(OBJ) !== undefined) {
      return OBJ;
    }
  });


  return DATA_JSON
}
