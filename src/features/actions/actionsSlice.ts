import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определяем интерфейс для действия пользователя
export interface UserAction {
    username: string;
    action: string;
    action_created_at: string;
}

interface ActionsState {
    actions: UserAction[];
}

const initialState: ActionsState = {
    actions: []
};

const actionsSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        setActions(state, action: PayloadAction<UserAction[]>) {
            state.actions = action.payload;
        }
    }
});

export const { setActions } = actionsSlice.actions;
export default actionsSlice.reducer;
