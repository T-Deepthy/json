import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
padding: 8px;
`;
class Taskss extends React.Component { 
    render() { 
        return <Container>{this.props.task.content}</Container>;
    }
}
export default Taskss;