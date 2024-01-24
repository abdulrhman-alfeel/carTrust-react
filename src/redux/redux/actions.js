export const SET_TASKS = 'SET_TASKS';
export const SET_TASKSID = 'SET_TASKSID';
export const SET_Dark = 'SET_Dark';


// //المهام
// export const setTasks = tasks => dispatch => {
//   dispatch({type: SET_TASKS, payload: tasks});
// };
// export const setTasksID = tasksID => dispatch => {
//   dispatch({type: SET_TASKSID, payload: tasksID});
// };

//الديون

export const setDark = localed => dispatch => {
  dispatch({
    type: SET_Dark,
    payload: localed,
  });
};
/*export const setPhone = phone => dispatch=>{
    dispatch({
        type: SET_USER_PHONE,
        payload: phone,
    });
};


*/
