import type { User } from "../Users";
import type {
  ResponseResolver,
  RestRequest,
  RestContext,
  DefaultBodyType,
  PathParams,
} from "msw";

export const users: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
  },
];

type UserResolver<
  T extends DefaultBodyType,
  P extends PathParams = PathParams,
> = ResponseResolver<RestRequest<T, P>, RestContext, T>;

type UserParams = {
  userId: string;
};

export const mockGetUsers: UserResolver<User[]> = async (_, res, ctx) => {
  return res(ctx.json(users));
};

export const mockGetUser: UserResolver<User, UserParams> = async (
  req,
  res,
  ctx,
) => {
  const { userId } = req.params;
  const user = users.find((user) => user.id === parseInt(userId));

  // TODO add not found response, right now returning first if not found
  return res(ctx.json(user ?? users[0]));
};

export const mockPostUser: UserResolver<Pick<User, "name" | "id">> = async (
  req,
  res,
  ctx,
) => {
  const { name, id } = req.body;

  return res(
    ctx.json({
      id,
      name: name + " (mocked)",
    }),
  );
};
