function User({ id, name, email, username }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{username}</div>
    </div>
  );
}

export default User;
