import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "b1ifsl2w",
  dataset: "production",
  useCdn: "true",
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;

//run the following command inside sanity folder to add exception for localhost 3000 CORS policy
//sanity cors add http://localhost:3000
