type Tick = {
    id: string,
    no: number,
    ticketID: string,
    ticketName: string,
    createdDate: string,
    createdTime: string,
    ticketPrice: number | string,
    comboPrice: number | string,
    comboQuantity: number | string, 
    expireDate: string,
    expireTime: string,
    status: string,
}

type TickUpdate = {
    ticketID:string,
    ticketName: string,
    createdDate: string,
    createdTime: string,
    ticketPrice: number | string,
    comboPrice: number | string ,
    comboQuantity: number | string,
    expireDate: string,
    expireTime: string,
    status: string,
}

export const addTicket = (tickets: Tick ) => {
    return {
        type: 'ADD_TICKET',
        payload: tickets,
    }
}

export const updateTicket = (tickets: TickUpdate ) => {
    return {
        type: 'UPDATE_TICKET',
        payload: tickets,
    }
}