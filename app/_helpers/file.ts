import fs from 'fs/promises';
import path from 'path';

interface FileWithContent {
    fileName: string;
    content: string;
}

async function getFilesFromDirectory(directoryPath: string): Promise<FileWithContent[]> {
    try {
        // Read all file names in the directory
        const fileNames = await fs.readdir(directoryPath);

        // Filter out non-markdown files if needed
        const markdownFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

        // Read the content of each file
        return await Promise.all(
            markdownFiles.map(async (fileName) => {
                const filePath = path.join(directoryPath, fileName);
                const content = await fs.readFile(filePath, 'utf-8');
                return {fileName, content};
            })
        );
    } catch (error) {
        console.error('Error fetching files:', error);
        throw error;
    }
}

export const getPosts = async () => {
    try {
        // Here we are fetching data from the local folder called posts
        const postsDirectory = path.join(process.cwd(), 'posts');
        return await getFilesFromDirectory(postsDirectory);
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const getCposts = async () => {
    try {
        // Here we are fetching data from the local folder called posts
        const postsDirectory = path.join(process.cwd(), 'cposts');
        return await getFilesFromDirectory(postsDirectory);
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const getOposts = async () => {
    try {
        // Here we are fetching data from the local folder called posts
        const postsDirectory = path.join(process.cwd(), 'oposts');
        return await getFilesFromDirectory(postsDirectory);
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const getPostByName = async (name: string) => {
    try {
        const postsDirectory = path.join(process.cwd(), 'posts');
        const filePath = path.join(postsDirectory, `${name}.md`);

        const content = await fs.readFile(filePath, 'utf-8');
        return { fileName: name, content };
    } catch (error) {
        console.error(`Error fetching post ${name}:`, error);
        throw error;
    }
};

export const getCpostByName = async (name: string) => {
    try {
        const postsDirectory = path.join(process.cwd(), 'cposts');
        const filePath = path.join(postsDirectory, `${name}.md`);

        const content = await fs.readFile(filePath, 'utf-8');
        return { fileName: name, content };
    } catch (error) {
        console.error(`Error fetching post ${name}:`, error);
        throw error;
    }
};

export const getOpostByName = async (name: string) => {
    try {
        const postsDirectory = path.join(process.cwd(), 'oposts');
        const filePath = path.join(postsDirectory, `${name}.md`);

        const content = await fs.readFile(filePath, 'utf-8');
        return { fileName: name, content };
    } catch (error) {
        console.error(`Error fetching post ${name}:`, error);
        throw error;
    }
};
