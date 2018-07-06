export const selectPhone = (phone) => {
    console.log("You clicked on the phone: ", phone.id);
    return {
        type: 'PHONE_SELECTED',
        payload: phone
    }
};
