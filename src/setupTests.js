// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

//mocks/server.js 에서 모킹서버 불러옴
import { server } from './mocks/browser.js';

//테스트를 시작하기 전에 모킹 서버를 연결
beforeAll(() => server.listen());
//각 테스트가 끝나면 핸들러를 초기화해서, 다른 테스트에 영향을 주지 않도록 함
afterEach(() => server.resetHandlers());
//모든 테스트가 끝난 후, 모킹 서버를 닫아줌
afterAll(() => server.close()); // (4)
