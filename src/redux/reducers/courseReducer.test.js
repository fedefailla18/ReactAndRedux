import coursesReducer from "./coursesReducer";
import * as courseActions from "../actions/courseActions";

it("should create a course when passed CREATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "A",
    },
    { title: "B" },
  ];

  const newCourse = { title: "C" };

  const action = courseActions.createCourseSuccess(newCourse);

  //act
  const newState = coursesReducer(initialState, action);

  //assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      id: 1,
      title: "A",
    },
    { id: 2, title: "B" },
    { id: 3, title: "C" },
  ];

  const course = { id: 2, title: "Updated B" };
  const action = courseActions.updateCourseSuccess(course);

  //act
  const newState = coursesReducer(initialState, action);
  const updatedCourse = newState.find((a) => a.id === course.id);
  const untouchedCourse = newState.find((a) => a.id === 1);

  //assert
  expect(newState.length).toEqual(3);
  expect(untouchedCourse.title).toEqual("A");
  expect(updatedCourse.title).toEqual("Updated B");
});
