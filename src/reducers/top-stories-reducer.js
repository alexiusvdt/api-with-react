import * as c from '../actions/ActionTypes';

const topStoriesReducer = (state, action) => {
  switch (action.type) {
    case c.GET_TOP_STORIES_SUCCESS:
      return {
        ...state, 
        isLoaded: true,
        topStories: action.topStories
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default topStoriesReducer;