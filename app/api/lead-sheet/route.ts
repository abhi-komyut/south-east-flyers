export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json({ status: "skipped", reason: "GOOGLE_SHEET_WEBHOOK_URL not configured" }, { status: 200 });
  }

  const body = await request.json();

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name ?? "",
        contact: body.contact ?? "",
        company: body.company ?? "",
        flyers: body.flyers ?? "",
        suburb: body.suburb ?? "",
      }),
    });
  } catch {
    // Best-effort: the lead has already been sent to Formspree and
    // opened in WhatsApp, so a sheet-logging failure shouldn't surface
    // as an error to the visitor.
  }

  return Response.json({ status: "ok" });
}
