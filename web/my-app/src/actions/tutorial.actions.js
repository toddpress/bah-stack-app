import * as types from './types';

import tutorialService from './../services/tutorial.service.js';

// types.TUTORIAL_CREATE
export const createTutorial = (title, description) => async (dispatch) => {
  try {
    const res = await tutorialService.create({ title, description });
    dispatch({
      type: types.TUTORIAL_CREATE,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const fetchTutorials = () => async (dispatch) => {
  try {
    const res = await tutorialService.getAll();
    dispatch({
      type: types.TUTORIALS_FETCH,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await tutorialService.update(id, data);
    dispatch({
      type: types.TUTORIAL_UPDATE,
      payload: data,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
export const deleteTutorial = (id) => async (dispatch) => {
  try {
    const res = await tutorialService.remove(id);
    dispatch({
      type: types.TUTORIAL_DELETE,
      payload: { id },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
export const deleteAllTutorials = (id, data) => async (dispatch) => {
  try {
    const res = await tutorialService.removeAll();
    dispatch({
      type: types.ALL_TUTORIALS_DELETE,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
export const findTutorialsByTitle = (title) => async (dispatch) => {
  try {
    const res = await tutorialService.findByTitle(title);

    dispatch({
      type: types.TUTORIALS_FETCH,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
