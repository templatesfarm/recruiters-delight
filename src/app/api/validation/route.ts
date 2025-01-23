import { NextRequest, NextResponse } from "next/server";
import env from "@/app/env";

const limit = 5;
let count = limit;

export const POST = async (req: NextRequest) => {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }

    if (password === env.accessKey) {
      count = limit;
      return NextResponse.json(
        { message: "Access key is valid" },
        { status: 200 }
      );
    }

    if (count < 0) {
      return NextResponse.json(
        { error: "Validation limit exceeded" },
        { status: 403 }
      );
    }

    count--;

    if (password === env.password) {
      count = limit;
      return NextResponse.json(
        { message: "Password is valid" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
