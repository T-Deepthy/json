import React from 'react';
import initialData from './initial-data';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
class Tasks extends React.Component {
    state = initialData; 
    render() { 
        return (
            <DragDropContext>
            {this.state.columnOrder.map(columnId => { 
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(taskIds => this.state.tasks[taskIds]);
    
                return <Column key={column.id} column={column} tasks={tasks} />;
            })} 
            </DragDropContext>
            
        );
    }
}
export default Tasks;