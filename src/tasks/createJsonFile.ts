import fs from 'fs';

export const CreateJsonFile = async (jsonFilePath: string, data: any) => {
  const DATA_JSON = JSON.stringify(data, null, 2);

  await fs.writeFileSync(jsonFilePath, DATA_JSON, 'utf8');
};