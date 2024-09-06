const Header = (props) => {
  return <h1>{props.courseName}</h1>
}

const Total = ({ parts }) => {
  const total = parts.reduce((prev, cur) => prev + cur.exercises, 0)
  return <p>Number of exercises {total}</p>
}

const Content = ({ parts }) => {
  return (
    <>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} part={part}></Part>
        ))}
      </ul>
    </>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default Course
