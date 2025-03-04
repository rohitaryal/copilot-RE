import CopilotRE from "../src";

if (!process.env.cookie) {
    console.error("Please set the cookie environment variable.");
    process.exit(1);
}

// Init CopilotRE
const copilot = new CopilotRE({
    githubCookie: process.env.cookie,
    authToken: process.env.auth,
});

// Generate thread
const thread = await copilot.createThread();

console.log(thread);