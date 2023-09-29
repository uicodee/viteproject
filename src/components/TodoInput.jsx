import {Button, Col, Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";
// import {v4 as uuidv4} from "uuid";
import {newTodo} from "../api/index.js";

// eslint-disable-next-line react/prop-types
export const TodoInput = ({taskTitle, tasks, setTaskTitle, setTasks}) => {
    return (
        <>
            <Col span={12}>
                <Input
                    placeholder="Введите задачу"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
            </Col>
            <Col span={2}>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    style={{width: "100%"}}
                    onClick={() => {
                        // setTasks([...tasks, {id: uuidv4(), title: taskTitle, completed: false}])
                        // setTaskTitle("")
                        const data = newTodo(taskTitle)
                        data.then(res => setTasks([...tasks, res]))

                    }}
                />
            </Col>
        </>
    )
}