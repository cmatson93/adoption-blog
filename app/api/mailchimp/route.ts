export const dynamic = "force-static";

export async function POST(request: Request) {
  const { email_address, merge_fields, status } = await request.json();

  // 2. Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // 3. Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // 4. Prepare request data
  const data = {
    email_address: email_address,
    merge_fields: merge_fields,
    status: "subscribed",
  };

  console.log("data ", data);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString(
          "base64"
        )}`,
      },
      body: JSON.stringify(data),
    });

    const resJson = await res.json();

    return Response.json({ resJson });
  } catch (err) {
    console.log("err fetching on server ", err);
  }
}
