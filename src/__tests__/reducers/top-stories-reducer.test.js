import * as c from './../../actions/ActionTypes';
import topStoriesReducer from '../../reducers/top-stories-reducer';

describe('topStoriesReducer', () => {

  let action; 
  
  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null
  };

  test('successfully getting top stories should change isLoaded to true and update topStories', () => {
    const topStories = "An article";
    action = {
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
        isLoaded: true,
        topStories: "An article",
        error: null
    });
  });

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        topStoriesReducer(initialState, {type: null })
      }
    ).toThrowError("There is no action matching null.");
  });
});