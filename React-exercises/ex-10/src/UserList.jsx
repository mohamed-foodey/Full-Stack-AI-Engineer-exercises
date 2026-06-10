function UserList() {

    const listUsers = [
        { id: 1, name: 'Mohamet', Email: 'mohamet@.com' },
        { id: 2, name: 'abdi', Email: 'abdi@.com' },
        { id: 3, name: 'jamac', Email: 'jamac@.com' },
    ]

    return (
        <ul>
            {listUsers.map((user) => (
                <li key={user.id}>
                     {user.id}   {user.name}  {user.Email}
                </li>
            ))}
        </ul>
    );
}

export default UserList