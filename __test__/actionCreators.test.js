import * as actionCreators from '../client/actions/actionCreators';

describe('actionCreators', () => {
    it('should create an action to toggle loader', () => {
        const expectedAction = {
            type: 'TOGGLE_LOADER'
        }
        expect(actionCreators.toggleLoader()).toEqual(expectedAction)
    })

    it('should create an action to change to next page', () => {
        const page = 1;
        const expectedAction = {
            type: 'CHANGE_PAGE',
            page
        }
        expect(actionCreators.changePage(page)).toEqual(expectedAction)
    })

    it('should create an action to throw error', () => {
        const text = 'error msg';
        const expectedAction = {
            type: 'THROW_ERROR',
            text
        }
        expect(actionCreators.throwError(text)).toEqual(expectedAction)
    })

    it('should create an action to toggle loader', () => {
        const expectedAction = {
            type: 'TOGGLE_LOADER'
        }
        expect(actionCreators.toggleLoader()).toEqual(expectedAction)
    })

    it('should create an action to get pages number', () => {
        const pagesNumber = 10; 
        const expectedAction = {
            type: 'ADD_PAGES_NUM',
            pagesNumber
        }
        expect(actionCreators.addPagesNumber(pagesNumber)).toEqual(expectedAction)
    })

    it('should create an action to get photo info', () => {
        const index = 0; 
        const info  = {
            comments : {
                name: 'max',
                age: '12'
            },
            date: '12-12-12',
            views: '12312'
        }
        const expectedAction = {
            type: 'ADD_PHOTO_INFO',
            index,
            info
        }
        expect(actionCreators.addPhotoInfo(index, info)).toEqual(expectedAction)
    })

    it('should create an action to add photo', () => {
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
        const expectedAction = {
            type: 'ADD_PHOTOS',
            photos
        }
        expect(actionCreators.addPhotos(photos)).toEqual(expectedAction)
    })
})