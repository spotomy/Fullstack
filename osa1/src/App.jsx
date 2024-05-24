const Style = { fontFamily: "Arial", margin: "20px" }

const Header = (p) => {
   return (
      <div style={Style}>
         <h1>{p.kurssi}</h1>
      </div>
   )
}
const Content = (p) => {
   return (
      <div style={Style}>
         <h2>Number of exercises:</h2>
         <ul>
            <li>{p.m1}: {p.n1}</li>
            <li>{p.m2}: {p.n2}</li>
            <li>{p.m3}: {p.n3}</li>
         </ul>
      </div>
   )
}
const Total = (p) => {
   return (
      <div style={Style}>
         <h3>Total num of exercises: {p.n1 + p.n2 + p.n3}</h3>
      </div>
   )
}

const App = () => {
   const course = 'Half Stack application development'

   const part1 = {
     name: 'Fundamentals of React',
     exercises: 10
   }
   const part2 = {
     name: 'Using props to pass data',
     exercises: 7
   }
   const part3 = {
     name: 'Component state',
     exercises: 14
   }
 
   return (
     <div>
         <Header kurssi={course}/>
         <Content m1={part1.name} n1={part1.exercises}
            m2={part2.name} n2={part2.exercises}
            m3={part3.name} n3={part3.exercises}/>
         <Total n1={part1.exercises}
            n2={part2.exercises}
            n3={part3.exercises}/>
     </div>
   )
 }
export default App