import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import colores from '~/styles/colores';

export const Container = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
`;

export const FormContent = styled.ScrollView`
  flex: 1;
  background: #fff;
  margin: 50px 20px 50px 20px;
  border-radius: 20px;
  padding: 10px;
`;

export const CurrencyView = styled.View`
  align-items: center;
`;

export const InputMoney = styled(TextInputMask).attrs({
  type: 'money',
  options: {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$',
    suffixUnit: '',
  },
  placeholder: 'R$0,00',
})`
  width: 50%;
  border-bottom-width: 1px;
  color: ${colores.primary};
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
`;

export const InputText = styled.TextInput`
  width: 80%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
`;

export const LabelValue = styled.Text`
  color: rgba(0, 0, 0, 0.7);
`;

export const IconView = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: ${colores.secondary};
  justify-content: center;
  align-items: center;
`;

export const InputContent = styled.View`
  margin-top: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${colores.primary};
`;

export const ButtonText = styled.Text`
  color: ${colores.primary};
  font-size: 16px;
`;

export const ButtonView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  background: ${colores.secondary};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin: 40px 10px;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;
