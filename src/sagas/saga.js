import { all, delay, takeLatest, put } from 'redux-saga/effects'

function* ageUpAsync() {
  console.log('first action UP')
  yield delay(1000)
  yield put({ type: 'AGE_UP_SAGA', value: 1 })
}

function* ageDownAsync() {
  console.log('first action DN')
  yield put({ type: 'AGE_DOWN_SAGA', value: 1 })
}

export function* watchAgeUp() {
  console.log('watchAgeUP')
  yield takeLatest('AGE_UP', ageUpAsync)
}

export function* watchAgeDown() {
  console.log('watchAgeDN')
  yield takeLatest('AGE_DOWN', ageDownAsync)
}

export default function* watchAll() {
  yield all([
    watchAgeUp,
    watchAgeDown,
  ])
}