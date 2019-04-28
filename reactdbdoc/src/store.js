import { createStore } from 'redux';
const defaulState = {
    shouldShowForm: false,
    filterStatus: 'SHOW_ALL',
    words: [
        { _id: 'abc1', en: 'One', vn: 'Mot', isMemorized: true },
        { _id: 'abc2', en: 'Two', vn: 'Hai', isMemorized: false },
        { _id: 'abc3', en: 'Three', vn: 'Ba', isMemorized: false },
        { _id: 'abc4', en: 'Four', vn: 'Bon', isMemorized: true },
    ]
}
function reducer(state = defaulState, action) {
    return state;
}

export const store = createStore(reducer);