import { name } from './__init__'

export const ADD = `${name}/ADD`

export const add = (text) => ({ type: ADD, text })
