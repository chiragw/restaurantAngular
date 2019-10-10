import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/Leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
  	return Promise.resolve(LEADERS);
  }

  getLeader(id: String): Promise<Leader> {
	return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);  	
  }

  getFeaturedLeader(): Promise<Leader>{
  	return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
}
