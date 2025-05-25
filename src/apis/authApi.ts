import axios from "axios";
import { clientId, clientSecret } from "../configs/authConfig";
import { ClientCredentialTokenResponse } from "../models/auth";
import { redirectUri } from "../configs/commonConfig";
 
const encodedBase64 = (data:string):string => {
    if (typeof window !== "undefined") {
        //브라우저 환경
        return btoa(data);
    } else {
        //Node.js 환경
        return Buffer.from(data).toString("base64");
    }
}

export const getClientCredentialToken = async (): Promise<ClientCredentialTokenResponse> => {
    if (!clientId || !clientSecret) {
        throw new Error("Client ID or Client Secret is not configured");
    }

    try {
        const body = new URLSearchParams({
            grant_type: 'client_credentials',
        });
        const response = await axios.post(`https://accounts.spotify.com/api/token`, body, {
            headers: {
                Authorization : `Basic ${encodedBase64(
                    clientId + ":" + clientSecret
                )}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        return response.data;
    } catch(err) {
        throw new Error("Fail to fetct client credential token");
    }
}

export const exchangeToken = async (code:string, codeVerifier:string) => {
    try {
        const url = "https://accounts.spotify.com/api/token";
        if(!clientId || !redirectUri) {
            throw new Error("Client ID or Redirect URI is not configured");
        }

        const body = new URLSearchParams({
            client_id: clientId,
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier,
        });
        const response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        return response.data;
    } catch(err) {
        throw new Error("fail to fetch token");
    }
}