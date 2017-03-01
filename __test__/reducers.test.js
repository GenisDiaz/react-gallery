import rootReducer from '../client/reducers/index';

describe('testing reducers', () => {
    it ('shlould return the change of page', () => {
        expect(
            rootReducer({}, {
                type: 'CHANGE_PAGE', 
                page: 1
            })
        ).toEqual({
            "page": {"current_page": 2}, 
            "photos": [],
            "routing": {"locationBeforeTransitions": null}
        })
    })
    it ('shlould return the toggle loader', () => {
        expect(
            rootReducer({}, {
                type: 'TOGGLE_LOADER', 
                loading: false
            })
        ).toEqual({
            "page": {"loading": true}, 
            "photos": [],
            "routing": {"locationBeforeTransitions": null}
        })
    })
    it ('shlould return the add pages number', () => {
        expect(
            rootReducer({}, {
                type: 'ADD_PAGES_NUM', 
                pagesNumber: 11
            })
        ).toEqual({
            "page": {"pages": 11}, 
            "photos": [],
            "routing": {"locationBeforeTransitions": null}
        })
    })
    it ('shlould return the throw error', () => {
        expect(
            rootReducer({}, {
                type: 'THROW_ERROR', 
                text: 'error'
            })
        ).toEqual({
            "page": {"error": true, text: 'error'}, 
            "photos": [],
            "routing": {"locationBeforeTransitions": null}
        })
    })
    it ('shlould return the add photos', () => {
        const photos = [
            {
                farm:1,
                id:"32175478084",
                isfamily:0,
                isfriend:0,
                ispublic:1,
                name:"Francisco Javier",
                owner:"54694930@N05",
                secret:"3a29efb830",
                server:"718",
                title:"LED.- Efecto seda"
            },
            {
                farm:1,
                id:"33020385555",
                isfamily:0,
                isfriend:0,
                ispublic:1,
                name:"Francisco Javier",
                owner:"54694930@N05",
                secret:"bd87b34faf",
                server:"692",
                title:"LED en Playa La Viborilla con temporal de Levante fuerte"
            }
        ];
        expect(
            rootReducer({}, {
                type: 'ADD_PHOTOS', 
                photos: photos
            })
        ).toEqual({
            "page": [], 
            "photos": photos,
            "routing": {"locationBeforeTransitions": null}
        })
    })
    it ('shlould return the add photo info', () => {
        expect(
            rootReducer({}, {
                type: 'ADD_PHOTO_INFO', 
                index: '0'
            })
        ).toEqual({
            "page": [], 
            "photos": [{"info": undefined}],
            "routing": {"locationBeforeTransitions": null}
        })
    })
})