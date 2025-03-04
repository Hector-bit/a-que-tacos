export const handler = async (event) => {
  console.log("Background function started", event.body);

  // Simulating a long task (fetching data, sending email, etc.)
  await new Promise((resolve) => setTimeout(resolve, 15000)); // 30s delay

  console.log("Background task completed!");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Background task running!" }),
  };
};