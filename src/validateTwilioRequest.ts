import { validateRequest } from "twilio";

export const validateTwilioRequest = (data: string, twilioSignature: string, twilioAuthToken: string | undefined, incomingUrl: string | undefined): boolean => {
    
    var pairs = data.split('&');
    var result: any = {};
    pairs.forEach(function (pair) {
        let tmppair = pair.split('=');
        result[tmppair[0]] = decodeURIComponent(tmppair[1] || "");
    })

    if (twilioAuthToken !== undefined && incomingUrl !== undefined) {
        return validateRequest(twilioAuthToken, twilioSignature, incomingUrl, result);
    } else {
        return false;
    }
};