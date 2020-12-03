import React, { useState } from 'react';
import { fetchQuery, graphql } from 'react-relay';
import Page from 'src/components/common/Page';
import environment from 'src/relay.environment';
import { SignInQuery } from 'src/page/SignIn/__generated__/SignInQuery.graphql';

const query = graphql`
  query SignInQuery($input: SignInInput!) {
    signIn(input: $input)
  }
`;

const SignIn: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeUserId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserId(e.target.value);
  };

  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!userId && !password) {
      return;
    }
    try {
      const { signIn: token } = await fetchQuery<SignInQuery>(
        environment,
        query,
        {
          input: {
            userId,
            password,
          },
        },
      );
      localStorage.setItem('token', token || '');
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
  );
};

export default SignIn;
