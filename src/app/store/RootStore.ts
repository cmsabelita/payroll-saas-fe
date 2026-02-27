import { makeAutoObservable } from "mobx";
import { UserStore } from "./user/User.store";

export class RootStore {
  userStore = new UserStore();

  constructor() {
    makeAutoObservable(this);
  }
}
