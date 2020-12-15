import React, { useEffect } from 'react';
import Page from 'src/components/common/Page';
import { useRecoilState } from 'recoil';
import { isAuthState } from 'src/stores/auth';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import useInput from 'src/hooks/common/useInput';
import AuthModel from 'src/models/auth/AuthModel';
import { AuthRelayModel } from 'src/models/auth/AuthRelayModel';
import { useHistory } from 'react-router-dom';
import { PathName } from 'src/constants/pathName';

const SignIn: React.FC = () => {
  const history = useHistory();
  const { value: userId, onChange: onChangeUserId } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();
  const [isAuth, setIsAuth] = useRecoilState<boolean>(isAuthState);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!userId || !password) {
      return;
    }
    try {
      const authModel: AuthModel = new AuthRelayModel();
      const token = await authModel.signIn(userId, password);
      authModel.saveToken(token);
      setIsAuth(true);
      history.replace(PathName.HOME);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isAuth) {
      history.replace(PathName.HOME);
    }
  }, [isAuth]);

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
