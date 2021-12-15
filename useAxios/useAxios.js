import defualtAxios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (options={method : 'get' , postData : null}, axiosInstance = defualtAxios)=>{

    const [state, setstate] = useState({
        loading : true,
        error : null,
        data : null
    })
    const [trigger, settrigger] = useState(0);
    const refetch = ()=>{
        setstate({
            ...state,
            loading : true
        })
        settrigger(Date.now());
    }
    useEffect(() => {
        axiosInstance(options).then(data=>{
            setstate({
                ...state,
                loading:false,
                data
            })
        })
        .catch(error=>{
            setstate({...state,loading:false,error})
        })
    }, [trigger])

    return options.url ? {...state, refetch} : {...state, loading:false ,error:'No Url in Options',refetch};
}