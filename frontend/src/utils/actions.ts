import { AnyAction, AsyncThunk } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

export const isPendingAction = (action: AnyAction): action is PendingAction =>
  action.type.endsWith('pending');

export const isFulfilledAction = (
  action: AnyAction,
): action is FulfilledAction => action.type.endsWith('fulfilled');

export const isRejectedAction = (action: AnyAction): action is RejectedAction =>
  action.type.endsWith('rejected');
