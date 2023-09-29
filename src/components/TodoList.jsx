import {Checkbox, Col, List} from "antd";
import {updateTodo} from "../api/index.js";

// eslint-disable-next-line react/prop-types
export const TodoList = ({tasks}) => {
    return (
        <Col span={14}>
            <List
                bordered
                dataSource={tasks}
                renderItem={(item) => (
                    <List.Item>
                        <Checkbox
                            key={item.id}
                            checked={item.completed}
                            onChange={() => {
                                updateTodo(item.id, true)
                            }}
                        >
                            {item.todo}
                        </Checkbox>
                    </List.Item>
                )}
                style={{
                    marginTop: "8px"
                }}
            />
        </Col>
    )
}