import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import userDetails from '../features/userDetails';
export const store = configureStore({
    reducer: {
        user: userDetails,
    }
})
