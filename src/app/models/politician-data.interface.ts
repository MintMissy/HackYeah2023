export interface PoliticianDataInterface {
  id: number;
  firstName: string;
  lastName: string;
  politicalParty?: string;
  eventName?: string;
  description: string;
  profilePhotoPath?: string;
  backgroundPhotoPath?: string;
  followed?: string;
  "corePoliticalBelievesEntity"?: {
    "id": string,
    "economicMarker": number,
    "diplomaticMarker": number,
    "civilMarker": number,
    "societalMarker": number
  },
}
