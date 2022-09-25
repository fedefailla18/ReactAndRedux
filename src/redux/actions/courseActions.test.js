import * as courseActions from "./courseActions.js";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load courses thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading course", () => {
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" },
      });

      const expectedAction = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_COURSES_SUCCESS, courses },
      ];

      const store = mockStore({ courses: [] });
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});

describe("createActionCourse", () => {
  // arrange
  const course = courses[0];
  const expectedAction = {
    type: types.CREATE_COURSE_SUCCESS,
    course,
  };

  //act
  const action = courseActions.createCourseSuccess(course);

  //expect
  expect(action).toEqual(expectedAction);
});
