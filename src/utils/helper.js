import {Alert} from 'react-native';

export function currencyToFloat(currency) {
  const result = parseFloat(
    currency.replace('R$', '').replace(/\./g, '').replace(',', '.'),
  ).toFixed(2);
  return parseFloat(result);
}

export function floatToCurrency(float) {
  if (!float) return null;
  return float
    .toString()
    .replace('.', ',')
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
}

export function generatedUID() {
  const date = new Date();
  return `${date.getTime()}`;
}

export function alertAction(title, subtitle, action) {
  Alert.alert(
    title,
    subtitle,
    [
      {
        text: 'Cancelar',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: () => {
          action;
        },
      },
    ],
    {cancelable: false},
  );
}
