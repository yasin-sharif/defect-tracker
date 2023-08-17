import {createSlice} from "@reduxjs/toolkit";

const initialState=[];

/**
 * createSlice combines the need for actions and recucers
 * in a single function. 
 * 
 * name -> prefix for the generated action
 * initialSate -> initial state of the reducer (usally an empty array)
 * reducers -> an object of reducer functions
 */
const loginSlice=createSlice({
    // To store the current user details
    name:"login", // perfix name for generated actions
    initialState,
    reducers:{
        signIn:(state,action)=>{
            const {id,username,role}=action.payload;
            state.push({id,username,role});
        },
        signOut:(state,action)=>{
            state.pop();
        }
    }
})

export const {signIn,signOut}=loginSlice.actions;

export default loginSlice.reducer;