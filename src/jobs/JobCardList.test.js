import React from "react";
import { render } from "@testing-library/react";
import JobCardList from './JobCardList';
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../testUtils";

it("renders without crashing", () => {
    render(
        <MemoryRouter>
            <UserProvider>
                <JobCardList />
            </UserProvider>
        </MemoryRouter>);
});

it('matches snapshot', () => {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <JobCardList />
            </UserProvider>
        </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
})