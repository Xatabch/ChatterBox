function toContactList(response: any) {
    return {
        contactList: response.body['contact-list']
    }
}

export {
    toContactList
}