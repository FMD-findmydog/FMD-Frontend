import { useEffect } from "react";

export default NaverLogin = ({setGetToken, setUserInfo}) => {
  const {naver} = window;
  const NAVER_CLIENT_ID = '4Jr1Kifuyufr5ptlU1NW';
  const NAVER_CALLBACK_URL = 'http://findmydog.com/login';

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId : NAVER_CLIENT_ID,
      callbackUrl : NAVER_CALLBACK_URL,
      isPopup: false, //팝업창으로 로그인을 진행?
      loginButton : {color: 'green', type: 3, height: 60}, //버튼타입
      callbackHandle: true,
    });
    naverLogin.init();
    naverLogin.getLoginStatus(async function (status: any){ //일단 any
      if(status){
        const userid= naverLogin.user.getEmail();
        const username = naverLogin.user.getName();
      }
    })
  }
  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  }
  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
  }
  useEffect(()=> {
    initializeNaverLogin();
    userAccessToken()
  },[])

  return(
    <div id="naverIdLogin" ></div>
  );
}