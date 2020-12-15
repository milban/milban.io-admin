import AuthModel from 'src/models/auth/AuthModel';
import environment from 'src/relay.environment';
import SignIn from 'src/models/auth/relay/SignIn/SignIn';
import SignUp from 'src/models/auth/relay/SingUp/SignUp';

export class AuthRelayModel implements AuthModel {
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  signIn(userId: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      SignIn.commit(environment, {
        variables: {
          input: {
            userId,
            password,
          },
        },
        onCompleted: ({ signIn: token }) => {
          if (!token) {
            reject(new Error('The token is not exist.'));
            return;
          }
          resolve(token);
        },
        onError: (error) => {
          reject(error);
        },
      });
    });
  }

  signUp(userId: string, username: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      SignUp.commit(environment, {
        variables: {
          input: {
            userId,
            username,
            password,
          },
        },
        onCompleted: ({ signUp: token }) => {
          if (!token) {
            reject(new Error('The token is not exist.'));
            return;
          }
          resolve(token);
        },
        onError: (error) => {
          reject(error);
        },
      });
    });
  }
}
