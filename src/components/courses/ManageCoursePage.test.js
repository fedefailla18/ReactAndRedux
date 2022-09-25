import React from "react";
import { mount } from "enzyme";
import { authors, courses, newCourse } from "../../../tools/mockData";
import { ManageCoursesPage } from "./ManageCoursePage";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    course: newCourse,
    history: {},
    saveCourse: jest.fn(),
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    match: {},
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageCoursesPage {...props} />);
}

it("", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required");
});
