import { StaticImageData } from "next/image"


export type Technology = {
    name: string
    hashtag: string
    hashtagColor: string
    image: StaticImageData|string
}

export const getTechnologiesByHashtags = (hashtags: string[]) => {
    return technologies.filter(technology => (
        hashtags.find(hashtag => hashtag === technology.hashtag)
    ));
}

const technologies: Technology[] = [
    {
        "name": "SCSS",
        "hashtag": "scss",
        "hashtagColor": "#ec008c",
        "image": ""
    },
    {
        "name": "Next.js",
        "hashtag": "nextjs",
        "hashtagColor": "#2f80ed",
        "image": ""
    },
    {
        "name": "React.js",
        "hashtag": "react",
        "hashtagColor": "#2f80ed",
        "image": ""
    },
    {
        "name": "REDUX",
        "hashtag": "redux",
        "hashtagColor": "#764abc",
        "image": ""
    },
    {
        "name": "RTK Query",
        "hashtag": "rtk_query",
        "hashtagColor": "#007acc",
        "image": ""
    },
    {
        "name": "React Query",
        "hashtag": "react_query",
        "hashtagColor": "#ff4154",
        "image": ""
    },
    {
        "name": "Framer Motion",
        "hashtag": "framer_motion",
        "hashtagColor": "#6c63ff",
        "image": ""
    },
    {
        "name": "Three.js",
        "hashtag": "threejs",
        "hashtagColor": "#ffffff",
        "image": ""
    },
    {
        "name": "Laravel",
        "hashtag": "laravel",
        "hashtagColor": "#ff2d20",
        "image": ""
    },
    {
        "name": "PHP",
        "hashtag": "php",
        "hashtagColor": "#777bb3",
        "image": ""
    },
    {
        "name": "HTML",
        "hashtag": "html",
        "hashtagColor": "#e44d26",
        "image": ""
    },
    {
        "name": "Javascript",
        "hashtag": "javascript",
        "hashtagColor": "#f0db4f",
        "image": ""
    },
    {
        "name": "NestJS",
        "hashtag": "nestjs",
        "hashtagColor": "#e0234e",
        "image": ""
    },
    {
        "name": "Typescript",
        "hashtag": "typescript",
        "hashtagColor": "#3178c6",
        "image": ""
    },
    {
        "name": "Tailwind",
        "hashtag": "tailwind",
        "hashtagColor": "#38b2ac",
        "image": ""
    },
    {
        "name": "Vue.js",
        "hashtag": "vue",
        "hashtagColor": "#41b883",
        "image": ""
    },
    {
        "name": "MySQL",
        "hashtag": "mysql",
        "hashtagColor": "#00758f",
        "image": ""
    },
    {
        "name": "Material UI",
        "hashtag": "material_ui",
        "hashtagColor": "#0081cb",
        "image": ""
    },
    {
        "name": "Ant Design",
        "hashtag": "ant_design",
        "hashtagColor": "#1890ff",
        "image": ""
    },
    {
        "name": "gulp.js",
        "hashtag": "gulpjs",
        "hashtagColor": "#cf4647",
        "image": ""
    },
    {
        "name": "Yii Framework",
        "hashtag": "yiiframework",
        "hashtagColor": "#48c3d6",
        "image": ""
    },
    {
        "name": "JQuery",
        "hashtag": "jquery",
        "hashtagColor": "#0769ad",
        "image": ""
    },
    {
        "name": "Express.js",
        "hashtag": "express",
        "hashtagColor": "#000000",
        "image": ""
    },
    {
        "name": "Android Studio",
        "hashtag": "android_studio",
        "hashtagColor": "#3ddc84",
        "image": ""
    },
    {
        "name": "C",
        "hashtag": "c",
        "hashtagColor": "#00599c",
        "image": ""
    },
    {
        "name": "Verilog",
        "hashtag": "verilog",
        "hashtagColor": "#44a9d9",
        "image": ""
    },
    {
        "name": "HDL",
        "hashtag": "hdl",
        "hashtagColor": "#6c3ac7",
        "image": ""
    },
    {
        "name": "FPGA",
        "hashtag": "fpga",
        "hashtagColor": "#f6a800",
        "image": ""
    },
    {
        "name": "Arduino",
        "hashtag": "arduino",
        "hashtagColor": "#00979d",
        "image": ""
    },
    {
        "name": "MATLAB",
        "hashtag": "matlab",
        "hashtagColor": "#0076a3",
        "image": ""
    }
];

export default technologies;