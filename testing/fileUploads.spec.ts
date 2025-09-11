import { test, expect } from '@playwright/test';
import path from 'path';

test("Single File upload", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles() - Upload file or multiple files into <input type=file>. 
    await page.locator("#filesToUpload").setInputFiles("C:/Users/prave/Music/QEdgeTSJune/TestData/Courses.txt")
    await expect(page.locator("#fileList li")).toContainText("Courses")
    await page.waitForTimeout(5000)
})

test("Single Filepath upload ", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const filePath = path.join(__dirname, "../TestData/Courses.txt")
    console.log(filePath)
    // C:\Users\prave\Music\QEdgeTSJune\tests , ../TestData/Courses.txt
    // C:\Users\prave\Music\QEdgeTSJune\TestData\Courses.txt

     await page.locator("#filesToUpload").setInputFiles(filePath)
     await expect(page.locator("#fileList li")).toContainText("Courses")
})

test("Multiple File upload ", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const filePath1 = path.join(__dirname, "../TestData/Courses.txt")
    const filePath2 = path.join(__dirname, "../TestData/Cypress.txt")
    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])
    await expect(page.locator("#fileList li").first()).toContainText("Courses")
    await expect(page.locator("#fileList li").last()).toContainText("Cypress")

})

