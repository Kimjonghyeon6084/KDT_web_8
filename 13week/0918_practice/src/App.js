import'./App.css'

function App() {

  const users = [
    { id: 1, name: 'John', age: 25, vip: true},
    { id: 2, name: 'Jane', age: 19, vip: false},
    { id: 3, name: 'Alice', age: 30, vip: true},
    { id: 4, name: 'Bob', age: 18, vip: false},
    { id: 5, name: 'Charlie', age: 35, vip: true}
  ]

    const newUsers = users.filter((users) => {return users.vip})
    // const newUsers = users.filter(number => number.id % 2 === 1)
      // const newUsers = users.filter(number => number.age >= 20)

      const loading = true
      const name = 'KJH'
  return (
    <>
      {loading && <>
        <ol>{newUsers.map((value) => {
        return <li key={value.id}>{value.name}</li>
      })}
      {name || 'jonghyun'}
      </ol></>}
      
      {/* <ol>
        {users.filter((person) => {return person.age >= 20})}
      </ol> */}
    </>
);
}

export default App;