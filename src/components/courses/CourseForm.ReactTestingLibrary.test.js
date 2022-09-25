import React from "react";
import { render } from "@testing-library/react";
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

it("should label save button as Save", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("should label save button as Saving... when saving", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
