import { connectToDB } from "@utils/databse";
import Prompt from "@models/prompt";

export const GET = async (request, {params}) => {

    try {
        await connectToDB();

        const prompts = await prompt.find({creator: params.id}).populate('creator');

        return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response("failed to fetch all prompts", {status: 500})
    }
}