const Header = (props) => {
		return (
				<h1>
						{props.courseName}
				</h1>
		)
}

const Total = (props) => {
	const total = props.contents.reduce((prev, cur) => prev + cur.exercises, 0);
	return (
			<p>Number of exercises {total}</p>
	)
}

const Content = (props) => {
		return (
			<>
				<Part part={props.parts[0]}></Part>
				<Part part={props.parts[1]}></Part>
				<Part part={props.parts[2]}></Part>
			</>
		)
}

const Part = (props) => {
		const part = props.part
		return (
				<p>{part.name} {part.exercises}</p>
		)
}
const App = () => {
	const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
	
	return (
		<div>
			<Header courseName={course.name}></Header>
			<Content parts={course.parts}></Content>
			<Total contents={course.parts}></Total>
		</div>
	)
}

export default App