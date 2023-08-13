const is={users:[]};

const reducer=(state,action)=>{
    //console.log("action  : ",action);
    //console.log(action.type);
    //console.log(action.payload);
    /*
    switch(action.type)
    {
        case "del" :  const rcds=[...state.users];
                      rcds.splice(action.payload,1);
                      return {...state,users:rcds};  
        case "reset" : return is;
        default : return state;
    }
    */

    if(action.type==="del")
    {
        const rcds=[...state.users];
        rcds.splice(action.payload,1);
        return {...state,users:rcds};  
    }
    else if(action.type==="reset")
    {
        return is;
    }
    else if(action.type==="add")
    {
        const rcds=[...state.users];
        rcds.push(action.payload);
        return {...state,users:rcds};  
    }
    else 
    {
        return state;
    }
    
}

export{is,reducer};