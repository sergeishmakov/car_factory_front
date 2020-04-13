import { useCallback, useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useHistory } from 'react-router';

import { useAuthenticate } from '../../hooks/use-authenticate';
import { ContentLayout } from '../../components/ContentLayout';
import { FieldGroup } from '../../components/FieldGroup';
import { SubmitErrors } from '../../components/SubmitErrors';
import { FormInput } from '../../components/Input';
import { required } from '../../utils/form-validation';
import { Button } from '../../components/Button';
import { signIn } from '../../api/user';
import { Container, Title, Controls } from './styles';

export default function SignIn() {
  const history = useHistory();

  const { user, onSignIn } = useAuthenticate();

  const handleSubmit = useCallback(async (values) => {
    const { user, error } = await signIn(values);
    if (error) return { [FORM_ERROR]: error, login: '', password: '' };
    onSignIn(user);
    history.goBack();
  }, []);

  useEffect(() => {
    if (user) history.push('/');
  }, [user]);

  return (
    <ContentLayout>
      <Container>
        <Title>Авторизация</Title>
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit, submitting, submitErrors }) => (
            <form onSubmit={handleSubmit}>
              <SubmitErrors errors={submitErrors} />
              <FieldGroup label="Логин">
                <Field name="login" validate={required} component={FormInput} />
              </FieldGroup>
              <FieldGroup label="Пароль">
                <Field name="password" validate={required} type="password" component={FormInput} />
              </FieldGroup>
              <Controls>
                <Button disabled={submitting} type="submit" text="Войти" />
              </Controls>
            </form>
          )}
        </Form>
      </Container>
    </ContentLayout>
  );
}
