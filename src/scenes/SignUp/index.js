import { useCallback, useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { useHistory } from 'react-router';

import { useAuthenticate } from '../../hooks/use-authenticate';
import { ContentLayout } from '../../components/ContentLayout';
import { SubmitErrors } from '../../components/SubmitErrors';
import { FieldGroup } from '../../components/FieldGroup';
import { required } from '../../utils/form-validation';
import { FormInput } from '../../components/Input';
import { Button } from '../../components/Button';
import { signUp } from '../../api/user';
import { Container, Title, Controls } from './styles';

export default function SignUp() {
  const history = useHistory();

  const { user, onSignIn } = useAuthenticate();

  const handleSubmit = useCallback(async (values) => {
    const { user, error } = await signUp(values);
    if (error) return { [FORM_ERROR]: error, login: 'Введите другой логин' };
    if (!user) return { [FORM_ERROR]: 'Что-то пошло не так! Попробуйте еще раз.' };
    onSignIn(user);
    history.push('/');
  }, []);

  useEffect(() => {
    if (user) history.push('/');
  }, [user]);

  return (
    <ContentLayout>
      <Container>
        <Title>Регистрация</Title>
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit, submitting, pristine, submitError }) => (
            <form onSubmit={handleSubmit}>
              <SubmitErrors errors={submitError} />
              <FieldGroup label="Логин">
                <Field name="login" validate={required} component={FormInput} />
              </FieldGroup>
              {/* <FieldGroup label="Имя">
                <Field name="firstName" validate={required} component={FormInput} />
              </FieldGroup>
              <FieldGroup label="Фамилия">
                <Field name="lastName" validate={required} component={FormInput} />
              </FieldGroup> */}
              <FieldGroup label="Пароль">
                <Field name="password" validate={required} type="password" component={FormInput} />
              </FieldGroup>
              {/* <FieldGroup label="Подтверждение пароля">
                <Field name="confirmPassword" validate={required} type="password" component={FormInput} />
              </FieldGroup> */}
              <Controls>
                <Button disabled={submitting || pristine} type="submit" text="Зарегистрироваться" />
              </Controls>
            </form>
          )}
        </Form>
      </Container>
    </ContentLayout>
  );
}
