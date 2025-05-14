export const onRequest = async ({ request, next }) => {
  // リファラー（アクセス元のURL）を取得
  const referer = request.headers.get("referer") || "";

  // FANBOXからのアクセスを許可
  if (referer.includes("fanbox.cc")) {
    return next();
  }

  // FANBOX以外からのアクセスは拒否
  return new Response("403 Forbidden - No hotlinking allowed", {
    status: 403,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
