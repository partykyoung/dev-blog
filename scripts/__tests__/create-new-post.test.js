import fs from "fs";
import createNewPost from "../create-new-post.mjs";

// Mock the fs module
jest.mock("fs", () => ({
  writeFile: jest.fn((path, data, callback) => callback(null)),
}));

// Mock dayjs
jest.mock("dayjs", () => () => ({
  format: () => "2024-02-28 12:00:00",
}));

// Mock @inquirer/prompts
jest.mock("@inquirer/prompts", () => ({
  input: jest.fn().mockResolvedValue("Test Post Title"),
  checkbox: jest.fn().mockResolvedValue(["Tag1", "Tag2"]),
}));

describe("createNewPost", () => {
  it("creates a new post with the correct filename and content", async () => {
    // Check if fs.writeFile was called correctly
    expect(fs.writeFile).toHaveBeenCalled();
    const call = fs.writeFile.mock.calls[0];

    console.log("test code", call);

    expect(call[0]).toMatch(/posts\/test-post-title.md$/); // Adjust regex as necessary
    expect(call[1]).toContain("title: Test Post Title");
    expect(call[1]).toContain("date: 2024-02-28 12:00:00");
    expect(call[1]).toContain('tags: ["Tag1","Tag2"]');
  });
});
