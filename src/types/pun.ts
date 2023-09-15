interface IPun {
    id?: number;
    pun: string;
    author: string;
    upVote?: number;
    downVote?: number;
    created_at?: Date;
}

export default IPun;