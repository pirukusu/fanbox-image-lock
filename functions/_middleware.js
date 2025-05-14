export const onRequest = async ({ request, next }) => {
  const referer = request.headers.get("referer") || "";
  if (!referer.includes("fanbox.cc")) {
    return new Response("403 Forbidden - No hotlinking allowed", {
      status: 403,
      headers: { "Content-Type": "text/plain" }
    });
  }
  return next();
};
