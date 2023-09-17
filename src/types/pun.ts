interface IPun {
    id?: number;
    pun: string;
    author: string;
    upVote?: number;
    downVote?: number;
    createdAt?: Date | string;
}

export default IPun;