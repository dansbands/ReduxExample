const initialState = {
  age: 20,
}

const reducer = (state = initialState, action) => {
  console.log({ action })
    switch(action.type) {
        case 'AGE_UP_SAGA':
          return {
            ...state,
            age: state.age += action.value
          }
        
        case 'AGE_DOWN_SAGA':
          return {
            ...state,
            age: state.age -= action.value
          }
        
        default:
          return state
    }
}

export default reducer