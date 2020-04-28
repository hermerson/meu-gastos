import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Container,
  Header,
  MonthText,
  HeaderButton,
  ListItems,
  ActionButton,
  Item,
  IconView,
  DetailsView,
  Title,
  Description,
  ValueText,
  ValueView,
  HeaderList,
  HeaderLabel,
  HeaderTotalAccount,
} from './styles';
import {floatToCurrency, currencyToFloat, alertAction} from '~/utils/helper';
import AccountActions from '~/store/ducks/accounts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CreateAccount from '~/components/CreateAccount';

export default function Main({navigation}) {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.account.accounts);
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalAccounts, setTotalAccounts] = useState(0);

  function handleDelete(accountId) {
    alertAction(
      'Excluir',
      'Deseja realmente excluir essa conta?',
      dispatch(AccountActions.deleteAccount(accountId)),
    );
  }

  useEffect(() => {
    let total = 0;
    accounts.forEach((account) => {
      total = total + currencyToFloat(account.value);
    });
    setTotalAccounts(total);
  }, [accounts]);

  return (
    <Container>
      <Header>
        <HeaderButton>
          <Icon name="keyboard-arrow-left" size={32} color="#fff" />
        </HeaderButton>
        <MonthText>Maio</MonthText>
        <HeaderButton>
          <Icon name="keyboard-arrow-right" size={32} color="#fff" />
        </HeaderButton>
      </Header>

      <ListItems
        data={accounts}
        ListHeaderComponent={
          <HeaderList>
            <HeaderLabel>Total de gastos no mês</HeaderLabel>
            <HeaderTotalAccount>
              R${floatToCurrency(totalAccounts)}
            </HeaderTotalAccount>
          </HeaderList>
        }
        renderItem={({item}) => (
          <Item key={item.id} onLongPress={() => handleDelete(item.id)}>
            <IconView>
              <Icon name="credit-card" size={32} color="#fff" />
            </IconView>

            <DetailsView>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </DetailsView>

            <ValueView>
              <ValueText>{item.value}</ValueText>
            </ValueView>
          </Item>
        )}
      />

      <ActionButton onPress={() => navigation.navigate('CreateAccount')}>
        <Icon name="add" size={32} color="#fff" />
      </ActionButton>
    </Container>
  );
}
