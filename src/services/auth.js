export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          username: 'higordenomar',
          password: '1234',
        }
      });
    }, 2000);
  });
}