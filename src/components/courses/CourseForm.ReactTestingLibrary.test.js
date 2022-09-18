import React from "react";
import { getByText, render } from "@testing-library/react";
import CourseForm from "./CourseForm";

const renderCourseForm = (args) => {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
};

it("should render Add course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("should render Save course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("should render Saving... course header", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
