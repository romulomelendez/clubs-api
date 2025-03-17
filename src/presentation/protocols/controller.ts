import { Club } from "../../domain/models"
import { HttpResponse } from "./http-response"

export interface Controller<T = any> {
  handle: (params: Club | string) => Promise<HttpResponse<T>>
}
