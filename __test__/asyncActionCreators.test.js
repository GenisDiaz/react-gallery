import * as actionCreators from '../client/actions/actionCreators';
import configureMockStore from 'redux-mock-store';
import fetch from 'jest-fetch-mock';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('asyncActionCreators', () => {

    let mockObject = { photos : [
        {
            "id": "32175478084",
            "owner": "54694930@N05",
            "secret": "3a29efb830",
            "server": "718",
            "farm": 1,
            "title": "LED.- Efecto seda",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "33020385555",
            "owner": "54694930@N05",
            "secret": "bd87b34faf",
            "server": "692",
            "farm": 1,
            "title": "LED en Playa La Viborilla con temporal de Levante fuerte",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32202426383",
            "owner": "54694930@N05",
            "secret": "18e94b5c07",
            "server": "2708",
            "farm": 3,
            "title": "917A6607  PLAYA KALIFATO",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32202020733",
            "owner": "54694930@N05",
            "secret": "89cb59c6d7",
            "server": "3873",
            "farm": 4,
            "title": "917A6621 PLAYA TAJO LA SOGA",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32851708991",
            "owner": "54694930@N05",
            "secret": "31b9bd383d",
            "server": "626",
            "farm": 1,
            "title": "El pasado y presente \"La Alcazaba y La Pérgola\".",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32593418200",
            "owner": "54694930@N05",
            "secret": "ce8638dc8b",
            "server": "2600",
            "farm": 3,
            "title": "917A6586  LA  NAO",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32933443336",
            "owner": "54694930@N05",
            "secret": "a967d4a075",
            "server": "599",
            "farm": 1,
            "title": "917A6598  LA FAROLA",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32488959282",
            "owner": "54694930@N05",
            "secret": "6a9968e90d",
            "server": "434",
            "farm": 1,
            "title": "OTRA PERSPECTIVA DE LA CASCADA PUENTE DE PALO",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "31772954424",
            "owner": "54694930@N05",
            "secret": "5aca9b8827",
            "server": "673",
            "farm": 1,
            "title": "LOCALIDAD DE MONDA,MÁLAGA,SPAIN",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32461610012",
            "owner": "54694930@N05",
            "secret": "dab3f6d828",
            "server": "361",
            "farm": 1,
            "title": "917A6511 MIRADOR DEL MACHO MONTÉS- REFUGIO DE JUANAR",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32536090446",
            "owner": "54694930@N05",
            "secret": "79887b45dd",
            "server": "346",
            "farm": 1,
            "title": "Ojén, municipio de la provincia de Málaga",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32453573381",
            "owner": "54694930@N05",
            "secret": "36ec651019",
            "server": "336",
            "farm": 1,
            "title": "917A6471  CASCADA DE PUENTE PALO",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32508591876",
            "owner": "54694930@N05",
            "secret": "cb435ecc25",
            "server": "326",
            "farm": 1,
            "title": "IMG_7531 CENACHERO",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32542323035",
            "owner": "54694930@N05",
            "secret": "d3f5194885",
            "server": "584",
            "farm": 1,
            "title": "LED Torremuelle",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         },
         {
            "id": "32535678155",
            "owner": "54694930@N05",
            "secret": "30b5e6b814",
            "server": "485",
            "farm": 1,
            "title": "LED ROQUEDAL PLAYA LA MORERA",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0
         }
    ]};

    it('Create fetch when init app', () => {
        fetch.mockResponse(mockObject);
        const store = mockStore({photos : []});
 
        return store.dispatch(actionCreators.initApp())
        .then(() => {
            console.log(expect(store.getActions()))
        })
    })
})