import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {z} from 'zod'


z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function POST(request: NextResponse) {


    try{
        let reqBody=await request.json();
        const prisma=new PrismaClient();
        const result=await prisma.issue.create({data:reqBody})

      
        // JSON Parse....
        return  NextResponse.json({status:"success",data:result})
    }


    catch (e) {
        return  NextResponse.json({status:"fail",data: e})
    }

}