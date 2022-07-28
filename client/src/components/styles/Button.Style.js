import styled from 'styled-components';
import Button from "./Button";

// export const BlueButton = styled.button`
//     width: 200px;
//     height: 50px;
//     background-color: blue;
// `;

// export const GreenButton = styled.button`
//     width: 200px;
//     height: 50px;
//     background-color: green;
// `;

// export const RedButton = styled.button`
//     width: 200px;
//     height: 50px;
//     background-color: red;
// `;

export const StyledButton = styled(Button)`
    width: 200px;
    height: 50px;
    // How you pass props
    background-color: ${(props) => props.backgroundColor};

    // To add effects like hover or animations use &: signs and the effect you want
     &:hover {
      background-color: purple;
    } 

    
    &:hover {
        & label {
          color: black;
        }
    }
`;

export const ButtonLabel = styled.label`
  font-size: 25px;
  color: white;
`;