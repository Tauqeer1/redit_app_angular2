export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number){
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      //Split the string and it contains array of string and we take only second part of string at one index
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];  //split and take zero index string
    } catch (err) {
      return null;
    }
  }
}
