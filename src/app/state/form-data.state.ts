import { ChartFormData } from 'interfaces';

export interface FormDataState {
    formData: ChartFormData[]; // List of form data
    loading: boolean;         // Loading state
    error: string | null;
    totalDocuments: number;     // Error state
}

export const initialFormDataState: FormDataState = {
    formData: [],
    loading: false,
    error: null,
    totalDocuments: 0, // Initialize totalDocuments with a default value
};
