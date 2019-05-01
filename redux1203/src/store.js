import { createStore } from 'redux';

function reducer(state = { value: 1 }, action) {
    if (action.type === 'INCREASE') return { value: state.value + 1 };
    if (action.type === 'DESCREASE') return { value: state.value - 1 };
    if (action.type === 'RESET') return { value: 1 };
    return state;
}

export const store = createStore(reducer);

//   console.log(store.getState());
//   store.dispatch({type:'INCREASE'});
//   console.log(store.getState());
//   store.dispatch({type:'DESCREASE'});
//   console.log(store.getState());

/*
- state {}
- store quan ly state
- reducer -> la function tinh toan state moi
- action {type: ''}
*/