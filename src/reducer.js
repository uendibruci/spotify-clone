import { act } from "react-dom/test-utils";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCPJgTAkiQUGmsZrbgr2YEWKtvRPZUmhaGTvlCkMdBJBBRI3liECpk9krNvNaCCgBYRayiKpStvpzuJw42Wx3l3ieurCxIDuKDLldYRXzrIRsSu5dtBrW4z8fI_ZZBZn2F7-wass7GdGeC7rNlXSs2Tow8PUJfWeUQF78Inu4HqBxcFQEIc",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
