import { Title } from "./Title"

export interface Club {
    name: string,
    badge: string,
    color: string | null,
    lastTitle: Title
}