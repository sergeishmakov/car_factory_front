export function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export function userSignIn(data) {
  return localStorage.setItem('user', JSON.stringify(data));
}

export function userSignOut() {
  return localStorage.removeItem('user');
}
