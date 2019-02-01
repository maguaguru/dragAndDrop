import styled from 'styled-components'

export const StyledWorkarea = styled.div`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  top:  ${props => props.y || '0px'};
  left: ${props => props.x ||'0px'};
  position: absolute;
  border: solid 1px #000;
`;


export const StyledTarget = styled.div`
  width: ${props => props.width || '10px'};
  height: ${props => props.height || '10px'};
  top:  ${props => props.y || '0px'};
  left: ${props => props.x ||'0px'};
  background-color: ${props => props.color ||'#FFFFFF'};;
  position: absolute;
`;


