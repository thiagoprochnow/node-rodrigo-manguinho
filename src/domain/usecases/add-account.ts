import { AccountModel } from '../models/account'

// Modelo de Domain do AddAccount. AccountModel será um modelo de DB do AddAccount
export interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add (account: AddAccountModel): AccountModel
}
