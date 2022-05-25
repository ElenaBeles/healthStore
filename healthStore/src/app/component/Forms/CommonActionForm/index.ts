export const checkFormValid = (err: any, setValue: Function) => {
    setValue(Object.keys(err).length === 0)
}