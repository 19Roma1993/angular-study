import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        let votess = [
            {
                id: 1,
                title: 'Bootstrap',
                url: 'http://getbootstrap.com/',
                choices: 2
            },
            {
                id: 2,
                title: 'Foundation',
                url: 'http://foundation.zurb.com/',
                choices: 6
            },
            {
                id: 3,
                title: 'UIkit',
                url: 'https://getuikit.com/',
                choices: 5
            }
        ];
        return {votess};
    }
}