import { types } from 'mobx-state-tree';

export const UserData = types.model({
    "name": "types.string",
    "password" : "types.password",
})
export const User = types.model({
    "users": types.optional(types.array(UserData), [])
})