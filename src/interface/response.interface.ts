export interface IResponse{
    success: boolean,
    message: string,
    data: {
        text: string,
        translation: string
    },
    status: number
}

export interface IBody{
    text: string,
    target_language: "de" | "ru"
}