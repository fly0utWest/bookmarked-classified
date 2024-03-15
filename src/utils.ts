import { Config } from './types';
import developmentConfig from './config/development.json';

export const config: Config = developmentConfig;

export default config;
export function convertParams(param: string, ids: number[]): string {
  let resultParam: string = '';
  for (let i = 0; i < ids.length; i++) {
    resultParam += param + '=' + ids[i];
    if (i !== ids.length - 1) {
      resultParam += '&';
    }
  }

  return resultParam;
}
