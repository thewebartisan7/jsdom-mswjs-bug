import * as React from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export const Users = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleViewDetails = (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.error(err));
  };

  const handleBack = () => {
    setUser(null);
  };

  const handleAddNew = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        id: users.length + 1,
        name: "John Doe",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);

        setUsers((currentUsers) => [...currentUsers, user]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {user ? (
        <div>
          #{user.id} - {user.name} - {user.email} - {user.username} -{" "}
          {user.phone}
          <button onClick={handleBack}>back</button>
        </div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}{" "}
              <button
                aria-label={`view-details-${user.id}`}
                onClick={() => handleViewDetails(user.id)}
              >
                details
              </button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <button aria-label="add-new" onClick={handleAddNew}>
          Add new
        </button>
      </div>
    </div>
  );
};
