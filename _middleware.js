export async function onRequest({ request }) {
  const referer = request.headers.get("Referer");
  const url = new URL(request.url);

  // 画像は制限なし
  if (url.pathname.endsWith(".png") || url.pathname.endsWith(".jpg")) {
    return;
  }

  if (!referer || !referer.includes("fanbox.cc")) {
    return new Response("Forbidden", { status: 403 });
  }
}
