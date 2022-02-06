import React from "react";
import styled from "styled-components";
import { colors } from "../atoms/Variables/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { searchCharacter } from "../../redux/characterDucks";
import { searchEpisode } from "../../redux/episodeDucks";

export const Input = ({type}) => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        if(type === "characters"){
            dispatch(searchCharacter(e.target.value))
        }
        else if(type === "episodes"){
            dispatch(searchEpisode(e.target.value))
        }
    }
    return(
        <>
           <InputContainer>
                <Form>
                        <Label htmlFor="input"><FontAwesomeIcon icon={faSearch}/></Label>
                        <InputStyle 
                            type="text" 
                            placeholder="Search..." 
                            name="input" 
                            id="input"
                            onChange={handleChange}
                        />
                </Form>
           </InputContainer>
        </>
    )
}

const InputContainer = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 10px auto;
    
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction:row-reverse;
    color: ${colors.cyan};
    background-color: ${colors.black80};
    box-shadow: 0px 0px 15px ${colors.cyan};
    border-radius: 5px;

    &:hover{
        box-shadow: 0px 0px 15px ${colors.main80};
        color: ${colors.main};
    }
`;

const InputStyle = styled.input`
    width: 100%;
    height: 30px;
    outline: none;
    font-size: 16px;
    border: none;
    background: none;
    color: ${colors.main80};
    padding: 2px;
`
const Label = styled.label`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content:center;
    align-items: center;
    cursor:pointer;
    padding:2px;
    background-color: ${colors.blueSpace};
    border-radius: 0 5px 5px 0;
`;