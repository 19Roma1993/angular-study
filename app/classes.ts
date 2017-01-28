export class Todo {
    constructor(// public id:number,
        public title:string,
        public completed:boolean = false) {
    }
}
export class Vote {
    constructor(public title:string,
                public url:string,
                public choices:number = 0) {
    }
    id:number;
}