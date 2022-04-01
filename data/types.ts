export interface ProjectTypes {
    id: number,
    title: string,
    subtitle: string,
    category: string,
    techStack: string[],
    description: string,
    github?: string,
    live?: string,
    views?: string[]
}
