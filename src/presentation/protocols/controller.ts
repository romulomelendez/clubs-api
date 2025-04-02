import { Club } from "../../domain/models"
import { HttpResponse } from "./http-response"

export interface Controller<T = any> {
  handle: (params: Club | string | number) => Promise<HttpResponse<T>>
}
