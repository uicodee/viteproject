import {Row, Spin} from "antd";
import {useEffect, useState} from "react";
import {TodoInput} from "./components/TodoInput.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {getTodos} from "./api/index.js";

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [taskTitle, setTaskTitle] = useState()
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const data = getTodos()
        data.then(res => setTasks(res.todos))
        setIsLoading(false)
    }, [])
  return (
    <>
        {isLoading ? (
            <Row className="row-wrapper align-center">
                <Spin size="large"/>
            </Row>
        ) : (
            <Row className="row-wrapper" gutter={10}>
                <TodoInput tasks={tasks} taskTitle={taskTitle} setTasks={setTasks} setTaskTitle={setTaskTitle} />
                <TodoList tasks={tasks} setTasks={setTasks} />
            </Row>
        )}
    </>
  )
}

export default App
