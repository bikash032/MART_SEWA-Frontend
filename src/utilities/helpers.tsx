
export const setCookie = (name: string, value: string, days: number, path: string = "/"): void => {
    let expires = ""
    const today = new Date()
    console.log("today date", today);

    today.setTime(today.getTime() + days * 86400000)
    expires = "; expires" + today.toUTCString()

    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=${path}`
}



export const getCookie = (name: string): string | null => {

    const cookies = document.cookie.split("; ")
    console.log("cookies to check for the storage in local");

    for (const cookie of cookies) {
        const [key, value] = cookie.split("=")
        if (decodeURIComponent(key) === name) {
            console.log("decode value", value);

            return decodeURIComponent(value)
        }
    }
    return null
}


export function setLocalStorage<T>(name: string, value: T) {
    localStorage.setItem(encodeURIComponent(name), JSON.stringify(value))
}

export function getLocalStorage<T>(name: string):T | null {
    let result= localStorage.getItem(decodeURIComponent(name))
    return result?JSON.parse(result) as T :null
}

export function removeFromLocalStorage(key:string) {
localStorage.removeItem(encodeURIComponent(key))
}

