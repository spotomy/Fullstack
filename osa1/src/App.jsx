const Style = { fontFamily: "Arial", margin: "20px" }

const Header = (p) => {
   return (
      <div>
         <h1>{p.level} Stack application development</h1>
      </div>
   )
}

const Part1 = (p) => {
   return (
      <>
         <li>Fundamentals of React: {p.num}</li>
      </>
   )
}
const Part2 = (p) => {
   return (
      <>
         <li>Using props to pass data: {p.num}</li>
      </>
   )
}
const Part3 = (p) => {
   return (
      <>
         <li>Component state: {p.num}</li>
      </>
   )
}
const Content = (p) => {
   return (
      <div>
         <h2>Number of exercises:</h2>
         <ul>
            <Part1 num={p.e1}/>
            <Part2 num={p.e2}/>
            <Part3 num={p.e3}/>
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