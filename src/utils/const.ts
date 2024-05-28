export const AuthTokenName='ajs_anonymous_id';

export const GetStatusById=(state:number)=>{
    switch(state)
    {
        case 0:{
            return "New Order"
        }
        case 1:{
            return "Pending"
        }
        case 2:{
            return "Fulfilled / Completed"
        }
        case 3:{
            return "NLA"
        }
        default:{
            return "";
        }
    }
}

export const GetIdByStatus=(status:string)=>{
    switch(status)
    {
        case "Draft":{
            return 0
        }
        case "Pending":{
            return 1
        }
        case "Complete":{
            return 2
        }
        case "Report NLA":{
            return 3
        }
        case "Update Invoice":{
            return 4
        }
        default:{
            return null;
        }
    }
}

export const GetBadgeById=(state:number)=>{
    switch(state)
    {
        case 0:{
            return "badge-dark"
        }
        case 1:{
            return "badge-info"
        }
        case 2:{
            return "badge-success"
        }
        case 3:{
            return "badge-danger"
        }
        default:{
            return "badge-dark";
        }
    }
}

export const StatusData=[{
    id:0,label:'Draft'
},
{
    id:1,label:'Pending'
},
{
    id:2,label:'Fulfilled / Completed'
},
{
    id:3,label:'Rejected'
}
]

export const ListCostPercentage=32;
export const TicketMasterAPIKey="JArJtzXSEFsFZetPVGW7WdmAgaNtR2XB";
export const BaseUrl='https://gpseticketsatm.com'
// export const BaseUrl='https://localhost:7088'