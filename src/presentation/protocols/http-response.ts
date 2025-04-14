export type HttpResponse<T> = {
    statusCode: number
    message?: string
    clubData?: T
}