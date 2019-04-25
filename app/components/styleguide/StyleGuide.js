// Import dependencies
import styled from 'styled-components/native';

// Import components
import Colors from '../../constants/Colors';


// Paragpaph text
export const Paragraph = styled.Text`
    font-family: 'space-mono';
    font-size: ${props => props.size ? props.size : '15px'};
    color: ${Colors.fontColor};
    ${props => props.white ? 'color: ' : null};
    ${props => props.center ? 'text-align: center ' : null};
`;

// Title text
export const Title = styled.Text`
    font-family: 'space-mono';
    font-size: ${props => props.size ? props.size : '22px'};
    color: ${Colors.fontColor};
    ${props => props.white ? 'color: ' : null};
    ${props => props.center ? 'text-align: center ' : null};
`;
