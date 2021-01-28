import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

	state = {
		students: []
	};

	async componentDidMount() {
		const response = await fetch('http://localhost:8080/api/studentinfo/student/allstudents');
		const body = await response.json();
		this.setState({ students: body });
	}

	render() {
		const { students } = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<div className="App-intro">
						<h2>Student List</h2>
						{students.map(student =>
							<div key={student.id}>
								{student.id},
                {student.firstName},
				{student.lastName},
				{student.age},
				{student.city}
							</div>
						)}
					</div>
				</header>
			</div>
		);
	}

}
ReactDOM.render(<App />, document.getElementById('root'));
