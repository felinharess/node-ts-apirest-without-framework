import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../models/podecast-model';

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async (podcastName?: string): Promise<PodcastModel[]> =>{
    const RawData = fs.readFileSync(pathData,"utf-8");
    let jsonFile = JSON.parse(RawData);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast:PodcastModel )=> podcast.podcastName === podcastName);
    };
    return jsonFile;
}