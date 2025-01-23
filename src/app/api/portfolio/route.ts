import { databaseRoutes } from "@/lib/contants";
import {
  createOrUpdateData,
  fetchFileContentFromDatabase,
} from "@/lib/server/githubApi";
import { revalidatePath } from "next/cache";
// import {
//   fetchFileContentFromDatabase,
//   createOrUpdateData,
// } from "portfolio-api-package";

import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const porfolioData = await req.json();

  if (!porfolioData) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // Update the file in the repository
    await createOrUpdateData(databaseRoutes.PORTFOLIO, porfolioData);

    // Fetch the updated content
    const parsedContent = await fetchFileContentFromDatabase(
      databaseRoutes.PORTFOLIO
    );

    revalidatePath("/api/portfolio");
    return NextResponse.json(parsedContent, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const parsedContent = await fetchFileContentFromDatabase(
      databaseRoutes.PORTFOLIO
    );
    return NextResponse.json(parsedContent, { status: 200 });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Error fetching hero info:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
