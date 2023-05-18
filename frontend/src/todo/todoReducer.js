const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        id: 1,
        description: 'Pagar',
        done: true
    }, {
        id: 2,
        description: 'Comprar',
        done: false
    },
    {
        id: 1,
        description: 'Comer',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}