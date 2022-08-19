import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CustomerState {
  value: Customer[];
}

interface Customer {
    id: string;
    name: string;
    food: string[];
}

interface addFoodToCustomerPayload {
    food: string;
    id: string;
}

const initialState: CustomerState = {
  value: [],
}

export const customerSlice = createSlice({
  name: 'Customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
        state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action: PayloadAction<addFoodToCustomerPayload>) => {
        state.value.forEach((customer => {
            if(customer.id === action.payload.id) {
                customer.food.push(action.payload.food)
            }
        }))
    },
  },
});

export const addCustomer = customerSlice.actions.addCustomer
export const addFoodToCustomer = customerSlice.actions.addFoodToCustomer

export default customerSlice.reducer
