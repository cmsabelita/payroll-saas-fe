import { get, patch } from "@/services";
import type { User } from "./User.types";

const BASE = "/users";

export const UserApi = {
  async getMe(): Promise<User> {
    const res = await get<User>(`${BASE}/me`);
    return res.data;
  },

  async getById(id: string): Promise<User> {
    const res = await get<User>(`${BASE}/${id}`);
    return res.data;
  },

  async updateMe(payload: Partial<Pick<User, "name" | "email">>): Promise<User> {
    const res = await patch<User>(`${BASE}/me`, payload);
    return res.data;
  },

  async updateById(
    id: string,
    payload: Partial<Pick<User, "name" | "email">>,
  ): Promise<User> {
    const res = await patch<User>(`${BASE}/${id}`, payload);
    return res.data;
  },
};
