// https://redux-saga.js.org

import { delay } from 'redux-saga'
import { call, put, takeEvery, take, fork } from 'redux-saga/effects'
import axios from 'axios'

const request = (url) => {
  return axios.get(url)
}

function* getUrlAsync() {
  let result = {}
  try {
    yield delay(500)
    result = yield call(request, 'https://api.github.com/repos/redux-saga/redux-saga')
  } catch (error) {
    console.table(error)
    yield put({
      type: 'CATCH_ERROR',
      error: error.message
    })
  }
  if (result.status && result.status === 200) {
    yield put({
      type: 'FILL_URL',
      resUrl: result.data.downloads_url
    })
  }
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
     type: 'SHOW_MSG',
     msg: '惊人的三次点击'
   })
}

export default function* rootSaga () {
  yield fork(watchGetUrl)
  yield fork(watchThreeEffects)
}