export type onChange<T> = Event&{
    currentTarget: EventTarget& T
}