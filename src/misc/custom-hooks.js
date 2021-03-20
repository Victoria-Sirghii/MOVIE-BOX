import { useReducer, useEffect } from 'react';

function showsReducer(prevState, action){

  switch(action.type){

    case 'ADD'

    default: return prevState;
  }
}

function usePersistedReducer(reducer, initialState, key){
  const [ state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persisted = local.Storage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, dispatch]
}

usePersistedReducer(reducer, )

export function useShows(key = "shows"){

  return usePersistedReducer(showsReducer, [], key)
}