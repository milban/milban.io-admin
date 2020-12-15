import { commitMutation, Disposable, Environment, graphql } from 'react-relay';
import { SignUpMutation } from 'src/models/auth/relay/SingUp/__generated__/SignUpMutation.graphql';
import { MutationConfig } from 'relay-runtime';

const mutation = graphql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input)
  }
`;

interface SignUpCommit {
  (
    environment: Environment,
    config: Omit<MutationConfig<SignUpMutation>, 'mutation'>,
  ): Disposable;
}

const commit: SignUpCommit = (environment, config) => {
  return commitMutation<SignUpMutation>(environment, {
    mutation,
    ...config,
  });
};

export default { commit };
