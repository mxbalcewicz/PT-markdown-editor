import React, { useContext } from 'react';
import TextInput from '../Input/TextInput';
import Button from '../Button';
import { StyledForm } from './styled';
import { ThemeContext } from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormData {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm: React.VFC = () => {
  const theme = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        block
        type="text"
        label="Username"
        error={errors.username?.message}
        {...register('username')}
      />
      <TextInput
        block
        type="password"
        label="Password"
        error={errors.password?.message}
        {...register('password')}
      />
      <Button block color={theme.colors.primary} type="submit">
        Log in
      </Button>
    </StyledForm>
  );
};

export default LoginForm;
