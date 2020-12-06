import React from 'react';
import Page from 'src/components/common/Page';
import { useSetRecoilState } from 'recoil';
import { isAuthState } from 'src/stores/auth';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import useInput from 'src/hooks/common/useInput';
import useSignIn from 'src/hooks/auth/useSignIn';

const SignIn: React.FC = () => {
  const { value: userId, onChange: onChangeUserId } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();
  const setIsAuth = useSetRecoilState(isAuthState);
  const signIn = useSignIn();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!userId || !password) {
      return;
    }
    try {
      const token = await signIn(userId, password);
      localStorage.setItem('token', token);
      setIsAuth(true);
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
