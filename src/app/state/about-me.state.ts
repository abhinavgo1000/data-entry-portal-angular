import { AboutMeData } from 'interfaces';

export interface AboutMeState {
    aboutMeData: AboutMeData; // List of about me data
    loading: boolean;         // Loading state
    error: string | null;
}

export const initialAboutMeState: AboutMeState = {
    aboutMeData: { _id: '', message: '', link: '' }, // Initialize with an empty object
    loading: false,
    error: null
};
