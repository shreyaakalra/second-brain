import axios from "axios";
import * as cheerio from "cheerio";

interface PreviewMetadata {
  previewTitle?: string | undefined;
  previewDescription?: string | undefined;
  previewImage?: string | undefined;
}

export async function fetchMetadata(url: string): Promise<PreviewMetadata> {
  try {
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);

    const previewTitle = $('meta[property="og:title"]').attr('content');
    const previewDescription = $('meta[property="og:description"]').attr('content');
    const previewImage = $('meta[property="og:image"]').attr('content');

    console.log("METADATA RESULT:", { previewTitle, previewDescription, previewImage }); 


    return {
        previewTitle,
        previewDescription,
        previewImage
    }

  } catch (err) {
    console.log(err);
    return {}; 
  }
}