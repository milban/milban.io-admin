import React from 'react';
import Page from 'src/components/common/Page';
import { useSetRecoilState } from 'recoil';
import { isAuthState } from 'src/stores/auth';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import useInput from 'src/hooks/useInput';
import SignInMutation from 'src/mutations/auth/SignIn/SignInMutation';
import environment from 'src/relay.environment';

const SignIn: React.FC = () => {
  const { value: userId, onChange: onChangeUserId } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();
  const setIsAuth = useSetRecoilState(isAuthState);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!userId || !password) {
      return;
    }
    try {
      SignInMutation.commit(environment, {
        variables: {
          input: {
            userId,
            password,
          },
        },
        onCompleted: ({ signIn: token }) => {
          if (!token) {
            throw new Error('서버 장애 발생: 문의를 남겨주세요.');
          }
          localStorage.setItem('token', token);
          setIsAuth(true);
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DefaultLayout>
      <Page>
        <form onSubmit={onSubmit}>
          <label>
            ID:
            <input placeholder="id" value={userId} onChange={onChangeUserId} />
          </label>
          <label>
            Password:
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </label>
          <button type="submit">로그인</button>
        </form>
      </Page>
    </DefaultLayout>
  );
};

export default SignIn;
