const commonFn = require('../../common/commonFunction.js');
const homepage = require('../../pages/home_page.js');
const loginpage = require('../../pages/login_page.js');
const getUserData = require('../../common/getUserData.js');
const logout = require('../../pages/logout_page.js');

const page = 'Form Authentication';
const title = 'Login Page';
const url = '/login';
const path = 'data/users.json';
const titleSuccess = 'Secure Area';

describe('verify login page', () => {
  it('go to login page', () => {
    homepage().goToHomePage();
    homepage().goToPage(page);
  })
  it('verify title and url in login page', () => {
    commonFn().title_VerifyTitleH2(title);
    commonFn().URL_verifyUrl(url);
  })
  it('login', () => {
    getUserData().readJSonFile(path, 'validUser', 'username', loginpage().setTextUsername)
    getUserData().readJSonFile(path, 'validUser', 'password', loginpage().setTextPassword)
    loginpage().login();
    commonFn().title_VerifyTitleH2(titleSuccess);

  })
  it('logout', () => {
    logout().logout();
  })
})