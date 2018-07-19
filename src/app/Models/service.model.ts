export class Service {
    constructor(
       public id: number,
       public name: string,
       public desc: string,
       public img: string,
       public keywords: string[],
       public isUsed: boolean
    ) {}
 }