export type onChange = Event&{
    currentTarget:EventTarget & HTMLTextAreaElement & HTMLInputElement
}