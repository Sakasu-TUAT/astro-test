import { createClient } from "newt-client-js";
import tailwindTypography from "@tailwindcss/typography";

export interface Article {
    _id: string;
    _sys: {
      createdAt: string;
      updatedAt: string;
      raw: {
        createdAt: string;
        updatedAt: string;
        firstPublishedAt: string;
        publishedAt: string;
      };
    };
    title: string
    slug: string
    meta:{
        title: string;
        description: string;
        ogImage: {
          _id: string;
          src: string;
          fileType: string;
          fileSize: number;
          fileName: string;
          width: number;
          height: number;
        }
    };
    body: string;
    coverImage: {
        _id: string;
        src: string;
        fileType: string;
        fileSize: number;
        fileName: string;
        width: number;
        height: number;
    },
    author: string;
    tags: string;
};

export const newtClient = createClient({
    spaceUid: import.meta.env.NEWT_SPACE_UID,
    token: import.meta.env.NEWT_CDN_API_TOKEN,
    apiType: "cdn",
    // tailwindcss: {
    //     config: {
    //       content: [],
    //       plugins: [tailwindTypography],
    //     },
    //   },
});