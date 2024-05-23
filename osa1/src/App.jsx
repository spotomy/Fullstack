const Style = { fontFamily: "Arial", margin: "20px" }

const Header = (p) => {
   return (
      <div>
         <h1>{p.level} Stack application development</h1>
      </div>
   )
}
const Content = (p) => {
   return (
      <div>
         <h2>Number of exercises:</h2>
         <ul>
            <li>Fundamentals of React: {p.e1}</li>
            <li>Usings props to pass data: {p.e2}</li>
            <li>Component state: {p.e3}</li>
         </ul>
      </div>
   )
}
const Total = (p) => {
   return (
      <div>
         <h3>Total num of exercises: {p.n1 + p.n2 + p.n3}</h3>
      </div>
   )
}

const App = () => {
   const taso = '1/13'
   const ex1 = 10
   const ex2 = 7
   const ex3 = 14

   return (
      <div style={Style}>
         <Header level={taso}/>
         <Content e1={ex1} e2={ex2} e3={ex3}/>
         <Total n1={ex1} n2={ex2} n3={ex3}/>
      </div>
   )
}
export default App