const text = {
    mobile: 'Снижены цены на древесину.',
    desktop: 'Хорошие новости! Снижены цены на древесину.'
}
const link = {
    value: 'Подробнее ->',
    path: '#'
}

const content_Banner_v1 = {
    text,
    link
}


export const get = () => {
    return {
        body: {
            content_Banner_v1
        }
    }
}
