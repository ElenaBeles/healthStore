export interface IProfileCard {
    img: string;
    date_of_birth: string | number;
    firstName?: string;
    lastName?: string
    middleName?: string;
    profile?: string;
    seniority?: number | string;
    blood_type?: string;
}