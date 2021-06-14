import React from 'react';
import TextInput from 'components/Input/TextInput';
import Button from 'components/Button';
import { StyledForm } from './styled';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IRegisterPayload } from 'types/auth';

interface Props {
  onSubmit: (payload: IRegisterPayload) => void;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const RegisterForm: React.VFC<Props> = ({ onSubmit }) => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterPayload>({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        block
        type="text"
        label="Username"
        disabled={isSubmitting}
        error={errors.username?.message}
        {...register('username')}
      />
      <TextInput
        block
        type="email"
        label="Email"
        disabled={isSubmitting}
        error={errors.email?.message}
        {...register('email')}
      />
      <TextInput
        block
        type="password"
        label="Password"
        disabled={isSubmitting}
        error={errors.password?.message}
        {...register('password')}
      />
      <Button block color={theme.colors.primary} type="submit">
        Register
      </Button>
    </StyledForm>
  );
};

export default RegisterForm;
