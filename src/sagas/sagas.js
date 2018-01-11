// https://redux-saga.js.org

import { delay } from 'redux-saga'
import { call, put, takeEvery, all, take } from 'redux-saga/effects'
import axios from 'axios'

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

// 请求 Url 数据
function* getUrlAsync() {
  yield delay(500)
  const result = yield call(axios.get, 'https://api.github.com/repos/redux-saga/redux-saga')
  yield put({
    type: 'FILLURL',
    resUrl: result.data.downloads_url
  })
}

// 监听 FILLURL_ASYNC
function* watchGetUrl() {
  // takeEvery & takeLatest
  yield takeEvery('FILLURL_ASYNC', getUrlAsync)
}

// take
function* watchThreeEffects() {
   for (let i = 0; i < 3; i++) {
     yield take(['INCREMENT', 'DECREMENT'])
   }
   yield put({
     type: 'SHOWMSG',
     msg: '惊人的三次点击'
   })
}

export default function* rootSaga () {
  yield all([
    helloSaga(),
    watchGetUrl(),
    watchThreeEffects()
  ])
}
