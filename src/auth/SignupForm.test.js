import React from "react";
import { render } from "@testing-library/react";
import SignupForm from './SignupForm';
import { MemoryRouter } from "react-router";

it("matches snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <SignupForm />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});
