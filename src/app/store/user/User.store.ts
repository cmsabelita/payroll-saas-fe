import { makeAutoObservable } from "mobx";
import { UserApi } from "./User.api";
import type { User } from "./User.types";

export class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User | null) {
    this.user = user;
  }

  clearUser() {
    this.user = null;
  }

  async fetchCurrentUser() {
    const user = await UserApi.getMe();
    this.setUser(user);
    return user;
  }

  async updateProfile(payload: Partial<Pick<User, "name" | "email">>) {
    const user = await UserApi.updateMe(payload);
    this.setUser(user);
    return user;
  }

  get isAuthenticated() {
    return this.user !== null;
  }
}
