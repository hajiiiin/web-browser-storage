function isCookieExist(name) {
  // 쿠키의 이름을 받아서 해당 쿠키가 있으면 true,
  // 없으면 false를 리턴합니다.
  const cookieName = encodeURIComponent(name);
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(cookieName))
    ? true
    : false;
}

function setCookieWithOptions(name, value, options = {}) {
  // 쿠키의 이름, 값, 옵션을 받아서
  // 쿠키를 추가해주는 함수를 만들어 주세요.

  let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value); // 기본 쿠키 작성

  // 옵션 추가 - expires 옵션이 Date 객체라면
  if (options.expires instanceof Date) {
    // UTC 문자열로 변환
    options.expires = options.expires.toUTCString();
  }

  for (let optionKey in options) {
    let optionValue = options[optionKey];
    if (!optionValue) continue;

    cookie += "; " + optionKey; // 옵션 이름 추가
    cookie += optionValue !== true ? "=" + optionValue : ""; // 값이 true가 아니면 =값 추가
  }

  // 쿠키 저장
  document.cookie = cookie;
}

function deleteCookie(name) {
  // 쿠키의 이름을 받아서 해당 쿠키를 삭제하는
  // 함수를 만들어 주세요.
  document.cookie = encodeURIComponent(name) + "=; max-age=-1";
}
