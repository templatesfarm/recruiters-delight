// app/api/upload/route.ts
import { uploadFileInCDN } from "@/lib/server/githubApi";
import { NextRequest, NextResponse } from "next/server";
// import { uploadFileInCDN } from "portfolio-api-package";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    const { fileName, fileUrl } = await uploadFileInCDN(file);

    // const base64Content = Buffer.from(await file.arrayBuffer()).toString("base64");
    // const filename = `${Date.now()}-${file.name}`;

    // await createOrUpdateDataFromDatabase(filename, base64Content);
    // const { data } = await octokit.repos.createOrUpdateFileContents({
    //   owner,
    //   repo,
    //   path: filename,
    //   message: `Upload ${filename}`,
    //   content: base64Content,
    //   branch,
    // });

    // const fileUrl = data.content.html_url
    //   .replace("github.com", "raw.githubusercontent.com")
    //   .replace(`/blob/${branch}/`, `/${branch}/`);

    return NextResponse.json({ fileName, fileUrl });
  } catch (err) {
    const error = err as Error;
    console.error("Error in upload route:", error);

    return NextResponse.json(
      { error: "Failed to upload file", details: error.message },
      { status: 500 }
    );
  }
}
