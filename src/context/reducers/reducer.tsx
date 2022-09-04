interface ITicket {
    pack: {
        id: string,
        no: number,
        ticketID: string,
        ticketName: string,
        createdDate: string,
        ticketPrice: number | string,
        comboPrice: number | string,
        comboQuantity: number | string,
        expireDate: string,
        status: string,
    }[]
}

type Ticket = {
    id: string,
    no: number,
    ticketID: string,
    ticketName: string,
    createdDate: string,
    ticketPrice: number | string,
    comboPrice: number | string,
    comboQuantity: number | string,
    expireDate: string,
    status: string,
}

const initialState = {
    tickets: [{}],
    loading: false
}

interface Actionaddticket {
    type: "ADD_TICKET",
    payload: Ticket
}

type Action = Actionaddticket

const ticketsReducer = (state = initialState, action: { type: string, payload: Ticket }) => {
    switch (action.type) {
        case "ADD_TICKET": {
            const listticket = [...state.tickets]
            listticket.push(action.payload)

            return {
                ...state,
                tickets: listticket
            }
        }
        default:
            return state;
    }
}

export default ticketsReducer;