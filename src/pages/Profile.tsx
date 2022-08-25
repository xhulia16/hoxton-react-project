import { User } from "../types";

type Props = {
  user: User;
};

export function Profile({ user }: Props) {
  return (
    <div className="profile">
      <h1>Profile Settings</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let password = event.target.pass.value;
          let newPassword = event.target.newPass.value;
          console.log(password);
          if (password === newPassword) {
            fetch(`http://localhost:4000/users/${user.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                password: password,
              }),
            });
            event.target.reset();
            alert("password changed sucessfully");
          } else alert("Passwords do not match");
        }}
      >
        <input name="pass" type="password" placeholder="new password"></input>
        <input
          name="newPass"
          type="password"
          placeholder=" confirm new password"
        ></input>
        <button>Submit</button>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let name=event.target.name.value; 
          console.log(name)
          fetch(`http://localhost:4000/users/${user.id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              name: name
            })
          });
          event.target.reset()
          alert('Name updated sucessfully!')
        }}
      >
        <input name="name" placeholder="change name"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
