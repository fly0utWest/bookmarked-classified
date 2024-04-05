export function convertParams(
  param: string,
  values: number[] | string[],
): string {
  if (!values) {
    return '';
  }

  let resultParam: string = '';
  for (let i = 0; i < values.length; i++) {
    resultParam += param + '=' + values[i];
    if (i !== values.length - 1) {
      resultParam += '&';
    }
  }

  return resultParam;
}
