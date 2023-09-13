import { rest } from "msw";
import {
  mockGetUser,
  mockGetUsers,
  mockPostUser,
} from "./userResolver";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", mockGetUsers),
  rest.get("https://jsonplaceholder.typicode.com/users/:userId", mockGetUser),
  rest.post("https://jsonplaceholder.typicode.com/users", mockPostUser),
];
