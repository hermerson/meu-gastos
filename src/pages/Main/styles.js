import {Dimensions, FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import colores from '~/styles/colores';

const HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  width: 100%;
  background: ${colores.secondary};
  elevation: 5;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const MonthText = styled.Text`
  font-size: 22px;
  color: #fff;
  /* font-family: serif; */
  font-weight: bold;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const ListItems = styled(FlatList)``;

export const ActionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  position: absolute;
  z-index: 3;
  bottom: 0;
  right: 0;
  width: 62px;
  height: 62px;
  margin: 30px;
  border-radius: 31px;
  background: ${colores.secondary};
  justify-content: center;
  align-items: center;
`;

export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const IconView = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: ${colores.secondary};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

export const DetailsView = styled.View`
  flex: 2;
  padding: 10px;
`;

export const ValueView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ValueText = styled.Text`
  font-size: 22px;
  color: #000;
`;

export const HeaderList = styled.View`
  margin: 20px;

  elevation: 5;
`;

export const HeaderLabel = styled.Text`
  font-size: 22px;
  color: #000;
`;

export const HeaderTotalAccount = styled.Text`
  font-size: 22px;
  color: ${colores.primary};
`;
