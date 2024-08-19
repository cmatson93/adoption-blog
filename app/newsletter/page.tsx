export default function Newsletter() {
  const subscribe = async () => {
    // 2. Retrieve Mailchimp credentials from environment variables
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    // 3. Construct Mailchimp API request URL
    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    // 4. Prepare request data
    const data = {
      email_address: "cmatson93@gmail.com",
      status: "subscribed",
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   "API-Key": process.env.HELP_SHIFT_API_KEY,
        "API-KEY": "b9b49c97c4264b5f0245839e4d53642c-us8",
      },
      body: JSON.stringify(data),
    });

    const resJson = await res.json();

    console.log("resJson ", resJson);

    return Response.json({ resJson });
  };

  return (
    <div>
      Newsletter here
      <button onClick={() => console.log("clicked")}>Subscribe</button>
    </div>
  );
}
