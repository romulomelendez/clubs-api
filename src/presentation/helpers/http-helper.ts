import { HttpResponse } from "../protocols"

export class HttpHelper {
  static OK = <T>(data: T, message?: string): HttpResponse<T> => ({
    statusCode: 200,
    body: data,
    message,
  })

  static CREATED = <T>(data: T): HttpResponse<T> => ({
    statusCode: 201,
    body: data,
    message: "Successfully created",
  })

  static NOT_AUTHORIZED = <T>(): HttpResponse<T> => ({
    statusCode: 401,
    message: "Not Authorized"
  })

  static NOT_FOUND = <T>(): HttpResponse<T> => ({
    statusCode: 404,
    message: "Not Found",
  })

  static NOT_IMPLEMENTED = <T>(): HttpResponse<T> => ({
    statusCode: 501,
    message: "Not Implemented",
  })
}
