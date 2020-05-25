import moxios from "moxios";

import { authActions, errorActions } from "../actions";

import { makeMockStore } from "../utils";

describe("async actions", () => {
  const user = {
    name: "ogulcan133",
    password: "133131",
    email: "kara@gmail.com",
  };
  let response;
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it("creates registerRequest and registerSuccess when user register has been done", () => {
    response = user;
    const store = makeMockStore();

    const expectedActions = [
      authActions.registerRequest(),
      authActions.registerSuccess(response),
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: response,
      });
    });
    return store.dispatch(authActions.register(user)).then(() => {
      // return of async actions

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates registerRequest and registerFailure when user register has been done with fail", () => {
    response = "Request failed with status code 500";
    const store = makeMockStore();

    const expectedActions = [
      authActions.registerRequest(),
      authActions.registerFailure(),
      errorActions.setErrors(response,500),
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: response,
      });
    });
    return store.dispatch(authActions.register(user)).then(() => {
      // return of async actions

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
