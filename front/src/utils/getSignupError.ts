export default function getSignupError(error: string): string {
  switch (error) {
    case 'Passwords are not the same.':
      return 'Пароли не совпадают!';
    case 'NetworkError when attempting to fetch resource.':
      return 'Ошибка сервера - мы уже всё чиним!';
    default:
      return 'Пользователь уже существует!';
  }
};
