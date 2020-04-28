import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import AccountActions from '~/store/ducks/accounts';
import {useDispatch} from 'react-redux';
import {
  Container,
  FormContent,
  InputMoney,
  LabelValue,
  IconView,
  CurrencyView,
  InputText,
  InputContent,
  SubmitButton,
  ButtonText,
  ButtonView,
  CloseButton,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {generatedUID} from '~/utils/helper';

export default function CreateAccount({visible, handleModal}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  function submit() {
    dispatch(
      AccountActions.createAccount({
        id: generatedUID(),
        value,
        title,
        description,
      }),
    );
  }

  return (
    <Container>
      <FormContent>
        <CurrencyView>
          <IconView>
            <Icon name="credit-card" size={32} color="#fff" />
          </IconView>
          <InputMoney
            value={value}
            onChangeText={(text) => {
              setValue(text);
            }}
          />
          <LabelValue>Valor da despesa</LabelValue>
        </CurrencyView>

        <InputContent>
          <LabelValue>Titulo da despesa</LabelValue>
          <InputText value={title} onChangeText={setTitle} />
        </InputContent>

        <InputContent>
          <LabelValue>Descrição da despesa</LabelValue>
          <InputText value={description} onChangeText={setDescription} />
        </InputContent>

        <ButtonView>
          <SubmitButton onPress={submit}>
            <ButtonText>Adicionar</ButtonText>
          </SubmitButton>
        </ButtonView>
      </FormContent>
    </Container>
  );
}
