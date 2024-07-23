export const validateReq = (value:any) => value ? undefined : 'required'

const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
};

export const validateDate = (value: string) => {
    if (!value) return validateReq(value)
    return isValidDate(value) ? undefined : 'invalid date';
};

export const validateNumber = (value: number) => {
    if(!value) return validateReq(value)
    return value > 0 ? undefined : 'must be positive number'
}