import UserCard from "./UserCard";

function App() {
  const name = "mohamed";
  const email = "mohamed@.com";
  return (
    <>
    <UserCard name={name} email={email}/>
    <UserCard name={"foodey"} email={"foodey@.com"}/>
    <UserCard name={"abdi"} email={"abdi@.com"}/>
    </>
  )
}

export default App