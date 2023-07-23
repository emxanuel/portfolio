export type project = {
    id: number,
    name: string,
    description: string,
    url: string,
    repo: string
};

export const projects: project[] = [
    {
        id: 1,
        name: "social-network",
        description:
            "This is a web app where you can create an account, search friends, send them requests and chat",
        url: "https://emxanuel.github.io/social-network/",
        repo: "https://github.com/emxanuel/social-network",
    },
];

