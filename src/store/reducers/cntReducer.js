import { createSlice } from "@reduxjs/toolkit";

export const cntReducer = createSlice(
    //     const products = response.json();
    // return products;
    {
        name: "cnt",
        initialState: {
            value: [],
            editIndex: '',
            valueofupdate: '',
            delete: ""

        },
        reducers: {
            userAdded: (state, action) => {
                state.value.push(action.payload);
            },
            userUpdated: (state, action) => {
                // console.log(state)
                state.editIndex = action.payload;
            },
            valueofupdate: (state, action) => {
                state.valueofupdate = action.payload;
                const existingUser = state.value.find((user) => user.id === state.editIndex);
                if (existingUser) {
                    existingUser.Id = state.valueofupdate.Id;
                    existingUser.Name = state.valueofupdate.Name;
                    existingUser.Price = state.valueofupdate.Price;
                    existingUser.DropValue = state.valueofupdate.DropValue;
                    existingUser.File = state.valueofupdate.File;
                }
            },
            Removedetails: (state, action) => {
                // state.value.splice(state.payload, 1);
                state.delete = action.payload;
                const existingUser = state.value.find((user) => user.id === state.delete);
                if (existingUser) {
                    state.value = state.value.filter((user) => user.id !== state.delete);
                }
            },
        }
    }
);
export const { userAdded, userUpdated, editIndex, valueofupdate, Removedetails } = cntReducer.actions;
export const selectProduct = (state) => state.cnt.value;
export const editForm = (state) => state.cnt.editIndex;
export const update = (state) => state.cnt.valueofupdate;
export const remove = (state) => state.cnt.delete;

export default cntReducer.reducer;