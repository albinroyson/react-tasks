import React, { useState } from "react";
import styled from "styled-components";

function Todo() {
    const [todoinput, setTodoinput] = useState("");
    const [todolist, setTodoList] = useState([]);

    const handlesubmit = () => {
        setTodoList([...todolist, todoinput]);
        setTodoinput("");
    };
    return (
        <Totaldiv>
            <Tittle>Todo</Tittle>
            <Inputdiv>
                <Input>
                    <input
                        type="text"
                        value={todoinput}
                        onChange={(e) => setTodoinput(e.target.value)}
                    />
                </Input>
                <Button
                    onClick={() => {
                        handlesubmit();
                    }}
                >
                    + Add
                </Button>
            </Inputdiv>
            <Listdiv>
                <ul>
                    {todolist.map((item) => {
                        return <li>{item}</li>;
                    })}
                </ul>
            </Listdiv>
        </Totaldiv>
    );
}

export default Todo;
const Totaldiv = styled.div`
    width: 80%;
    margin: 30px auto;
`;
const Tittle = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;
const Inputdiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Input = styled.div`
    input {
        margin-bottom: 10px;
        padding: 10px 20px;
    }
`;
const Button = styled.div`
    text-align: center;
    background-color: blue;
    color: #fff;
    width: 50px;
    font-size: 15px;
    padding: 10px 20px;
`;
const Listdiv = styled.div`
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin: 20px 0;
    }
`;
