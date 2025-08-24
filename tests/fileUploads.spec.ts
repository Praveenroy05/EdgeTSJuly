import { test, expect } from '@playwright/test';
import path from 'path';

test("Single File upload", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles() - Upload file or multiple files into <input type=file>. 
    await page.locator("#filesToUpload").setInputFiles("C:/Users/prave/Music/QEdgeTSJune/TestData/Courses.txt")
    await expect(page.locator("#fileList li")).toContainText("Courses")
    await page.waitForTimeout(5000)
})

