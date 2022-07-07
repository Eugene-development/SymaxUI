const yearStart = '2000'
const text = 'Общая информация о компании'
const phoneService = '+7 (495) 147-55-50'

const menu = [
    {
        value: 'Меню-1',
        path: '#'
    },
    {
        value: 'Меню-2',
        path: '#'
    },
    {
        value: 'Меню-3',
        path: '#'
    },
    {
        value: 'Меню-4',
        path: '#'
    },
    {
        value: 'Меню-5',
        path: '#'
    },
]

const content_Footer_V1 = {
    yearStart,
    text,
    phoneService,
    menu
};


export const get = () => {
    return {
        body: {
            content_Footer_V1,
        }
    };
};
