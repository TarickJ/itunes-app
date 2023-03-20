
  // Test to check if the fetch call returns a response with status 200
  test("see if the fetch fails with error", async () => {
    const query = "britney";
    // Make the fetch call and wait for the response
    const response = await fetch(`https://itunes.apple.com/search?term=${query}&limit=20`);
    // Check if the response status is 200
    expect(response.status).toBe(200);
  });
  
  // Test to check if the fetch call returns a defined response
  test("test if api fetch is working as expected", async () => {
    const query = "britney";
    // Make the fetch call and wait for the response
    const response = await fetch(`https://itunes.apple.com/search?term=${query}&limit=20`);
    // Check if the response is defined
    expect(response).toBeDefined();
  });
  