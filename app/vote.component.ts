import {Component, OnInit} from "@angular/core";
import {Vote} from "./classes";
import {Service} from "./service";
@Component({
    moduleId: module.id,
    selector: 'vote',
    templateUrl: 'vote.component.html'
})
export class VoteComponent implements OnInit {
    votes:Vote[];
    newTitle:string;
    newUrl:string;
    constructor(private servise:Service){}

    votesSorted() {
        this.votes.sort(function (a, b) {
            return b.choices - a.choices;
        })
    }

    ngOnInit():void {
        this.servise.getVotes().then(votes=>{
            // console.log(votes);
            return this.votes=votes;})
            .then(()=>this.votesSorted());
    }

    create() {
        let vote = new Vote(this.newTitle, this.newUrl);
        this.servise.createVote(vote).then(vote=>{
            // console.log(vote);
            return this.votes.push(vote);});
    }

    createAlt(name:string, url:string) {
        if(!name || !url) return false;
        this.servise.createVoteAlt(name,url).then(vote=>{
            return this.votes.push(vote);});
    }

    voteUp(vote:Vote) {
        vote.choices++;
        this.servise.update(vote).then(()=>this.votesSorted());
    }

    voteDown(vote:Vote) {
        if (vote.choices > 0) {
            vote.choices--;
            this.servise.update(vote).then(()=>this.votesSorted());
        }
    }

    deleteVote(vote:Vote) {
        this.servise.delete(vote)
            .then(()=>this.votes=this.votes.filter(item=>item!==vote));
    }
}