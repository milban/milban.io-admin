import SignInMutation from 'src/mutations/auth/SignIn/SignInMutation';
import environment from 'src/relay.environment';

interface UseSignIn {
  (): (userId: string, password: string) => Promise<string>;
}

const useSignIn: UseSignIn = () => {
  return (userId, password) =>
    new Promise((resolve, reject) => {
      SignInMutation.commit(environment, {
        variables: {
          input: {
            userId,
            password,
          },
        },
        onCompleted: ({ signIn: token }) => {
          if (!token) {
            return reject('서버 장애 발생: 문의를 남겨주세요.');
          }
          resolve(token);
        },
        onError: (error) => {
          reject(error.message);
        },
      });
    });
};

export default useSignIn;
