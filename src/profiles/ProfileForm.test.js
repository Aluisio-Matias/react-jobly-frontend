import React from "react";
import { render } from "@testing-library/react";
import ProfileForm from "./ProfileForm";
import { UserProvider } from "../testUtils";


it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <ProfileForm />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <UserProvider>
      <ProfileForm />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
