import { User } from './slice';
import { createAction } from '@reduxjs/toolkit';

export const setUsers = createAction<User[]>('setUsers');
