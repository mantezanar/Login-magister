import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

export function sessionDecode(encryptedData, iv){

    const key = import.meta.env.VITE_KEY

    const bytes = CryptoJS.AES.decrypt(encryptedData, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });

    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    
    const session = JSON.parse(decryptedData)
    
   

    
    Cookies.set('access_token', JSON.stringify(session.access_token));
    Cookies.set('refresh_token', JSON.stringify(session.refresh_token));

    console.log("Funciona")
    

}

export default sessionDecode;