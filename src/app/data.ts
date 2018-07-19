import { Service } from './Models/service.model';

export const SERVICES: Service[] = [
  { id: 1, name: 'Auto', desc: '', img: 'https://i.imgur.com/KsUiXyI.jpg', keywords: ['car', 'auto'], isUsed: false, suggestedIds:[8] },
  { id: 2, name: 'Aviation', desc: '', img: 'https://i.imgur.com/IdOqUPz.jpg', keywords: ['plane', 'aviation'], isUsed: false, suggestedIds:[]},
  { id: 3, name: 'Collectibles', desc: '', img: 'https://i.imgur.com/Hj88FIu.jpg', keywords: ['collection', 'collectibles'], isUsed: false, suggestedIds:[10]},
  { id: 4, name: 'Farm & Ranch', desc: '', img: 'https://i.imgur.com/qhhl0M3.jpg', keywords: ['farm', 'ranch','barn','stable'], isUsed: false, suggestedIds:[]},
  { id: 5, name: 'Mobile Device', desc: '', img: 'https://i.imgur.com/ao4jJDd.jpg', keywords: ['cellphone', 'mobile', 'device'], isUsed: false, suggestedIds: [] },
  { id: 6, name: 'Pet Health', desc: '', img: 'https://i.imgur.com/Y6ssiaU.jpg', keywords: ['pet', 'dog', 'cat'], isUsed: false, suggestedIds: []},
  { id: 7, name: 'Rental Property', desc: '', img: 'https://i.imgur.com/Cgpq64f.jpg', keywords: ['rental', 'rent', 'renter'], isUsed: false, suggestedIds:[] },
  { id: 8, name: 'Motorcycles', desc: '', img: 'https://i.imgur.com/9x4SNZE.jpg', keywords: ['motorcycle'], isUsed: false, suggestedIds:[1] },
  { id: 9, name: 'Watercraft', desc: '', img: 'https://i.imgur.com/1cRQOb3.jpg', keywords: ['watercraft', 'boat', 'yacht','jet', 'ski'], isUsed: false, suggestedIds:[12] },
  { id: 10, name: 'Life Insurance', desc: '', img: '', keywords: ['life', 'insurance', 'marriage'], isUsed: false, suggestedIds:[] },
  { id: 11, name: 'Home Insurance', desc: '', img: 'https://i.imgur.com/KsUiXyI.jpg', keywords: ['house', 'home', 'homeowner'], isUsed: false, suggestedIds:[]},
  { id: 12, name: 'Florida', desc: '', img: 'https://i.imgur.com/KsUiXyI.jpg', keywords: ['Florida'], isUsed: false, suggestedIds:[11]},
  { id: 13, name: 'Flood', desc: '', img: 'https://i.imgur.com/KsUiXyI.jpg', keywords: ['flood', 'flooding'], isUsed: false, suggestedIds:[12]},
  { id: 14, name: 'Renters Insurance', desc: '', img: 'https://i.imgur.com/KsUiXyI.jpg', keywords: ['rent', 'renter','renting'], isUsed: false, suggestedIds:[11]},
  { id: 15, name: 'High Value Home', desc: '', img: 'https://i.imgur.com/KsUiXyI.jpg', keywords: ['high', 'value'], isUsed: false, suggestedIds:[11]},
  { id: 16, name: 'Jewelry Insurance', desc: '', img: 'https://i.imgur.com/KsUiXyI.jpg', keywords: ['jewelry'], isUsed: false, suggestedIds:[10]}
];