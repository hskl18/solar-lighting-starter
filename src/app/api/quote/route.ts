const ALLOWED_PROJECT_TYPES = new Set(["parking", "path", "campus"]);
const ALLOWED_FIXTURE_COUNTS = new Set(["1-10", "11-30", "31-plus"]);
const ALLOWED_TIMELINES = new Set(["research", "this-year", "next-year"]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "The request must contain valid JSON." }, { status: 400 });
  }

  // Treat parsed JSON as untrusted until its container and every value match the demo allowlist.
  const valid =
    isRecord(payload) &&
    typeof payload.projectType === "string" &&
    ALLOWED_PROJECT_TYPES.has(payload.projectType) &&
    typeof payload.fixtureCount === "string" &&
    ALLOWED_FIXTURE_COUNTS.has(payload.fixtureCount) &&
    typeof payload.timeline === "string" &&
    ALLOWED_TIMELINES.has(payload.timeline);

  if (!valid) {
    return Response.json(
      { message: "Choose one of the provided values for every field." },
      { status: 400 },
    );
  }

  return Response.json({
    demo: true,
    message: "The demo request passed server-side validation. Nothing was stored or sent.",
  });
}
