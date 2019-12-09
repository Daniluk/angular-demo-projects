export interface ICourse {
    id: number;
    description: string;
    iconUrl: string;
    courseListIcon: string;
    longDescription: string;
    category: string;
    lessonsCount: number;
    promo: boolean;
}

export interface ILesson {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}