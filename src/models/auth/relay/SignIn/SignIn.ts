import { commitMutation, Disposable, Environment, graphql } from 'react-relay';
import { MutationConfig } from 'relay-runtime';
import { SignInMutation } from 'src/models/auth/relay/SignIn/__generated__/SignInMutation.graphql';

const mutation = graphql`
  mutation SignInMutation($input: SignInInput!) {
    signIn(input: $input)
  }
`;

interface SignInCommit {
  (
    environment: Environment,
    config: Omit<MutationConfig<SignInMutation>, 'mutation'>,
  ): Disposable;
}

const commit: SignInCommit = (environment, config) => {
  return commitMutation<SignInMutation>(environment, {
    mutation,
    ...config,
  });
};

export default { commit };
