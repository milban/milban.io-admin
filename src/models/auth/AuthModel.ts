export default interface AuthModel {
  getToken(): string | null;
  removeToken(): void;
  saveToken(token: string): void;
  signIn(userId: string, password: string): Promise<string>;
}
