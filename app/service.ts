import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Todo, Vote} from "./classes";

@Injectable()
export class Service{
    private votesUrl = 'api/votess';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http){}
    getVotes(): Promise<Vote[]>{
        return this.http
            .get(this.votesUrl)
            .toPromise()
            .then(response => {
                // console.log(response);
                return response.json().data as Vote[];})
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    createVote(vote: Vote): Promise<Vote>{
        return this.http
            .post(this.votesUrl, JSON.stringify(vote), {headers: this.headers})
            .toPromise()
            .then(response=>{
                console.log(response.json().data);
                return response.json().data;})
            .catch(this.handleError);
    }
    createVoteAlt(name:string,url:string): Promise<Vote>{
        return this.http
            .post(this.votesUrl, JSON.stringify({title:name, url:url, choices:0}), {headers: this.headers})
            .toPromise()
            .then(response=>{
                console.log(response.json().data);
                return response.json().data;})
            .catch(this.handleError);
    }
    update(vote: Vote): Promise<Vote>{
        const url = `${this.votesUrl}/${vote.id}`;
        return this.http
            .put(url, JSON.stringify(vote), {headers: this.headers})
            .toPromise()
            .then(()=>vote)
            .catch(this.handleError);
    }
    delete(vote: Vote): Promise<Vote>{
        const url = `${this.votesUrl}/${vote.id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(()=>null)
            .catch(this.handleError);
    }
}