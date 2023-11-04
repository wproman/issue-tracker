import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {z} from 'zod'
// import prisma from "../../../../prisma/client";


const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function POST(request: NextResponse) {
 

    // try{
    //     let reqBody=await request.json();
    //     const prisma=new PrismaClient();
    //     const result=await prisma.issue.create({data:reqBody})

      
    //     // JSON Parse....
    //     return  NextResponse.json({status:"success",data:result})
    // }


    // catch (e) {
    //     return  NextResponse.json({status:"fail",data: e})
    // }
    const prisma=new PrismaClient();
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body)
    if(!validation.success)
    return NextResponse.json(validation.error.errors, {status:400})

    const newIssue  = await prisma.issue.create({
        data:{title:body.title, description:body.description}
    })
    
    return NextResponse.json(newIssue, {status: 201})
}