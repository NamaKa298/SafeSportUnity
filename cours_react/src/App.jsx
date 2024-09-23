const title1 = "Salut les Nazes"
const title2 = "Salut les Gens"
const style = {color:'pink', backgroundColor: 'blue'}
const showTitle = false
const todolist = [
  'faire les courses',
  'boire des bières',
  'courir un semi à 4"40'
]



function App() {

    
    
    return <>
      <Title color="green" >Mon composant</Title>
      
      <input type="text">
      </input>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum amet neque incidunt aperiam iure, libero excepturi enim nesciunt necessitatibus deleniti aut! Ducimus labore est, repellat dicta aliquam voluptatem ipsam!
      </p>

      <ul>
          {todolist.map(todolist => (<li key={todolist}>{todolist}</li>))}
      </ul>
  </>
}

function Title ({color, children, hidden}) {
  if (hidden){
    return null
}

const props = {
    id: 'monid',
    className: 'maclass'
}

  return <h1 style={{color: color}}>{children}</h1>
}

export default App 