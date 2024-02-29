import Stripe from "stripe";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
	const body = await req.text();
	const signature = headers().get("stripe-signature") as string;

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(
			body,
			signature,
			process.env.STRIPE_WEBHOOK_SECRET!
		);
	} catch (error: any) {
		console.log("[WEBHOOK Error]", error);
		return new NextResponse(`Webhook Error : ${error.message}`, {
			status: 400,
		});
	}

	// start to un comment
	// and remove the code if (event.type === "checkout.session.completed") {}
	// based on the comment in their
	/* 	const session = event.data.object as Stripe.Checkout.Session;
	console.log("[SESSION]", session);
	const userId = session?.metadata?.userId;
	const courseId = session?.metadata?.chapterId;

	console.log("USER_ID", userId);
	console.log("COURSE_ID", courseId); */

	// end to uncomment
	if (event.type === "checkout.session.completed") {
		// start to remove
		const session = event.data.object as Stripe.Checkout.Session;
		console.log("[SESSION_DATA]", session);
		const userId = session?.metadata?.userId;
		const courseId = session?.metadata?.courseId;

		console.log("USER_ID=>", userId);
		console.log("COURSE_ID=>", courseId);

		// end to remove
		if (!userId || !courseId) {
			return new NextResponse(
				`Webhook Error : Missing metadata [USER_ID_ID=>] ${userId} and [COURSE_ID_IS=>] ${courseId}`,
				{
					status: 400,
				}
			);
		}
		const purchaseInfo = await db.purchase.create({
			data: {
				userId: userId,
				courseId: courseId,
			},
		});
		console.log("PURCHASE_INFO", purchaseInfo);
	} else {
		return new NextResponse(
			`Webhook Error :Unhandled event type ${event.type} `,
			{ status: 200 }
		);
	}
	return new NextResponse(null, { status: 200 });
}
