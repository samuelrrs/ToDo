import React, { useContext } from "react";
import { TaskListContext } from './../../../contexts/TaskListContext';
import useStyles from './styles';
import { Typography, Container } from '@material-ui/core';
import Todo from './../Todo/index';

const TodoList = () => {
  const { tasks } = useContext( TaskListContext );

  const styles = useStyles()

  return (

    <Container>
      {tasks.length ? (
        <ul className="list">
          {tasks.map( task => {
            return <Todo task={ task } key={ task.id } />;
          } ) }
        </ul>
      ) : (
          <Typography className={ styles.noTask }>Sem tarefas no momento</Typography>
        ) }
    </Container>
  );
};

export default TodoList;
