import { atom } from "jotai";

export const userAtom = atom('')

export const getUserLogged = atom(get=>{
    const user = get(userAtom)
    let logged = false;
    if(user){
        logged = true
    }else if(localStorage.getItem('ua')){
        logged = true
    }
    return logged
})