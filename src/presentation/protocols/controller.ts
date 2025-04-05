import { Club, Login } from "../../domain/models"
import { HttpResponse } from "./http-response"

export interface Controller<T = any> {
  handle: (param: Club | String | Login | number) => Promise<HttpResponse<T>>
}
