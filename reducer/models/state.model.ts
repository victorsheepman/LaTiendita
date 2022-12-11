export interface IState{
    cart:Array<object>
    offer:Array<object>
    popular:Array<object>
}
export interface IDispatch{
    type:string
    payload:any
}