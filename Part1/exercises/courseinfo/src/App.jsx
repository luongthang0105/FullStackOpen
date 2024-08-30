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
				<Part part={props.part1}></Part>
				<Part part={props.part2}></Part>
				<Part part={props.part3}></Part>
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
			name: 'State of a component',
			exercises: 14
  	}	
	
		return (
			<div>
				<Header courseName={course}></Header>
				<Content 	part1={part1}
									part2={part2}
									part3={part3}
				></Content>
				<Total contents={[part1, part2, part3]}></Total>
			</div>
		)
	}

export default App