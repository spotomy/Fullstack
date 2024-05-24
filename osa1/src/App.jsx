const Style = { fontFamily: "Arial", margin: "20px" }

const Header = (p) => {
   return (
      <div>
         <h1>{p.kurssi}</h1>
      </div>
   )
}
const Content = (p) => {
   return (
      <div>
         <h2>Number of exercises:</h2>
         <ul>
            <li>{p.parts[0].name}: {p.parts[0].exercises}</li>
            <li>{p.parts[1].name}: {p.parts[1].exercises}</li>
            <li>{p.parts[2].name}: {p.parts[2].exercises}</li>
         </ul>
      </div>
   )
}
const Total = (p) => {
   let sum = p.parts[0].exercises + p.parts[1].exercises + p.parts[2].exercises;
   return (
      <div>
         <h3>Total num of exercises: {sum}</h3>
      </div>
   )
}

const App = () => {
   const course = 'Half Stack application development'

   const parts = [ 
      {
         name: 'Fundamentals of React',
         exercises: 10
      },
      {
         name: 'Using props to pass data',
         exercises: 7
      },
      {
         name: 'Component state',
         exercises: 14
      }
   ]
   return (
     <div style={Style}>
         <Header kurssi={course}/>
         <Content parts={parts}/>
         <Total parts={parts}/>
     </div>
   )
 }
export default App