export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished developing....
  // token: 'BQCHy2JJ4-WfpGbDzut-ktGu8hvXJGYrzX5-8_6Ix85xfNGJxlFSnrxn2d0l8hSMMeSW_TACNInRfoS5UMSurqwDgCr3hQiSkuWqRQyEXt6bNz__fxUe0WMayQyJLKTP7_RQHZCzowqkTfBzOouwoamtQjA'
}

const reducer = (state, action) => {
  console.log(action)

  // Action -> type, payload

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }

    default:
      return state
  }
}

export default reducer
