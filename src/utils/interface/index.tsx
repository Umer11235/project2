

export interface IOrderData {
    orderId: number;
    orderRecievedDateTime: string;
    orderRecivedById: number;
    orderFullFilledById: number;
    orderFulfillmentStatus: number;
    eventName: string;
    venueName: string;
    invoiceDate: string;
    eventDate: string;
    invoiceId: string;
    sec: string;
    row: string;
    seats: string;
    qty: number;
    unitCost: number;
    totalCost: number;
    total: number;
    orderRecivedBy?:string;
    orderFullFilledBy?:string;
    lowSeat?:number|string,
    highSeat?:number|string,
    eventId?:number|string,
    tmEventId?:string,
    tag?:string,
    currencyCode?:string
}
export interface IProxyData {
    proxyId?: number;
    proxy?: string;
    port?: number;
    userName?: string;
    password?: string;
    failedCount?: number;
    cluster?: number;
    proxyTag?: string;
   
}
export interface IEventData {
    setupEventId: number;
    isBroadCasting: boolean;
    image: string;
    eventName: string;
    venueName: string;
    tmEventId: string;
    eventMappingId: number | string;
    eventDate: string;
    inHandDate: string;
    listCostPercentage: number;
    hasGALAWNPIT: boolean;
    allowPreSales: boolean;
    cluster: number;
    isRady: boolean;
    createdAt: string;
     
}


export interface IUserInterface{
     userId?:string,
     userName:string,
     userEmail:string,
     password:string,
     role:number
}
export interface IOfferInterface{
    offerName?:string,
    offerId?:number
}
export interface LoginPayload {
    email: string;
    password: string;
}
export interface CommanState {
    data: string | null | boolean;
}

export interface OrdersState {
    data: IOrderData[] | [],
    count:number
  }

 
export interface EventState {
    data: IEventData[] | [],
    count:number
  }
export interface ProxyState {
    data: IProxyData[] | [],
    count:number
  }