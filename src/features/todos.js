export const setPending = () => {
  return {
    type: 'todos/pending'
  }
}
export const setFulfilled = payload => ({ type: 'todos/fulfilled', payload })

export const setError = e => ({ type: 'todos/error', error:e.message })

export const setComplete = payload => ({type: 'todo/complete', payload})

export const setFilter = payload => ({ type: 'filter/set', payload })